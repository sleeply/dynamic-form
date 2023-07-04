<script setup lang="ts">
import formElements from "@/assets/form.json";
import Element from "@/components/Element.vue";
import { provide } from "vue";
import { ref } from "vue";
import { REGIONS, DISTRICTS } from "@/utils/constants";

const elements = ref(formElements[0]);
const { fields, page_label } = elements.value ?? {};

elements.value.fields.forEach((el) => {
  if (el.field_id === "region") {
    for (const item in REGIONS) {
      el.options?.push(
        ...[
          {
            // @ts-ignore
            label: REGIONS[item],
          },
        ]
      );
    }
  }
});
function getObjectKey(obj: any, value: string) {
  return Object.keys(obj).find((key) => obj[key] === value);
}
const handleFilterDistricts = (key: string, arr: any[]) => {
  const city = getObjectKey(REGIONS, key);
  console.log(city);
  arr.forEach((el) => {
    if (el.field_id === "district") {
      el.options = [];
      if (city) {
        DISTRICTS[city].forEach((d) => {
          el.options.push(
            ...[
              {
                label: d.name,
              },
            ]
          );
        });
      }
    }
  });
};

const handleChange = (id: any, event: any) => {
  const newElements = { ...elements.value };
  newElements.fields.forEach((field) => {
    const { type, field_id, value } = field;
    if (id === field_id) {
      switch (type) {
        case "checkbox":
          field["value"] = event.target.checked;
          break;

        case "radio":
          field["value"] = event.target.value;
          break;

        case "select":
          if (field_id === "region") {
            handleFilterDistricts(event.target.value, newElements.fields);
          }
          break;

        default:
          field["value"] = event.target.value;
          break;
      }
    }
  });

  elements.value = newElements;
};

provide("handleChange", {
  handleChange: handleChange,
});
</script>

<template>
  <div>
    {{ page_label }}

    <form v-if="fields && fields.length > 0">
      <Element v-for="field in fields" :field="field" />
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
