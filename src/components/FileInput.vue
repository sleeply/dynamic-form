<script setup lang="ts">
import type { IFormProvider } from "@/modules/Form";
import { inject } from "vue";

interface IProps {
  id: string | undefined;
  label: string;
  placeholder?: string;
  value: string | number | undefined;
}

const injection = inject<IFormProvider>("handleChange");
defineProps<IProps>();
</script>

<template>
  <div>
    <label for="input-element"> {{ label }} </label>
    <input
      class="form-control"
      @change="injection?.handleChange(id, $event)"
      :placeholder="placeholder"
      type="file"
      name="input-element"
      :value="value"
    />
  </div>
</template>

<style lang="scss" scoped></style>
