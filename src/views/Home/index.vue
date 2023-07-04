<script setup lang="ts">
import formElements from "@/assets/form.json";
import Element from "@/components/Element.vue";
import { provide } from "vue";
import { ref } from "vue";
const elements = ref(formElements[0]);

const { fields, page_label } = elements.value ?? {};

const handleChange = (id: any, event: any) => {
  const newElements = { ...elements.value };
  console.log(event);
  newElements.fields.forEach((field) => {
    const { type, field_id } = field;
    if (id === field_id) {
      switch (type) {
        case "checkbox":
          field["value"] = event.target.checked;
          break;

        case "radio":
          field["value"] = event.target.value;
          break;

        default:
          field["value"] = event.target.value;
          break;
      }
    }
  });

  elements.value = newElements;

  console.log(elements.value.fields);
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
