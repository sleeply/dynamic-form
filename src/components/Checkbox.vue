<script setup lang="ts">
import type { IFormProvider } from "@/modules/Form";
import { inject } from "vue";

interface IProps {
  id: string;
  label: string;
  placeholder?: string;
  value: string;
}

defineProps<IProps>();

const injection = inject<IFormProvider>("handleChange");
</script>

<template>
  <div>
    <label for="input-element"> {{ label }} </label>
    <input
      type="checkbox"
      className="form-check-input"
      id="exampleCheck1"
      @change="injection?.handleChange(id, $event)"
    />
  </div>
</template>

<style lang="scss" scoped></style>
