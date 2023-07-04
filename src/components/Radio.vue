<script setup lang="ts">
import type { IFormProvider } from "@/modules/Form";
import { inject } from "vue";

interface IProps {
  id: string;
  label: string;
  placeholder?: string;
  value: string;
  radioButtons: any[];
}

const injection = inject<IFormProvider>("handleChange");
defineProps<IProps>();
</script>

<template>
  <div>
    <label for="input-element"> {{ label }} </label>
    <input
      v-for="radio in radioButtons"
      type="radio"
      className="form-radio-input"
      id="exampleRadio1"
      :checked="radio.label === value"
      :value="radio.label"
      @change="injection?.handleChange(id, $event)"
    />
  </div>
</template>

<style lang="scss" scoped></style>
