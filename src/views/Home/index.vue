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

        case "select":
          field["value"] = event.target.value;
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

const submit = (event: Event) => {
  event.preventDefault();
};

provide("handleChange", {
  handleChange: handleChange,
});
</script>

<template>
  <div class="wrapper d-flex align-items-center">
    <div class="container border p-3 shadow">
      <h1>{{ page_label }}</h1>
      <form
        class=""
        @submit.prevent="submit"
        v-if="fields && fields.length > 0"
      >
        <Element v-for="field in fields" :field="field" />
        <button
          class="btn btn-lg btn-primary mt-3"
          type="submit"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          submit
        </button>
      </form>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Form</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p v-for="item in fields">
                {{ [item.field_id] + ": " + item.value }}
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
}
</style>
