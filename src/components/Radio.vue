<script setup lang="ts">
import type { IFormProvider } from "@/modules/Form";
import { inject } from "vue";

interface IProps {
  id: string;
  label: string;
  placeholder?: string;
  value: string;
  checked: boolean;
}

const injection = inject<IFormProvider>("handleChange");
defineProps<IProps>();
</script>

<template>
  <div class="form-check">
    <label :for="id" class="form-check-label"> {{ label }} </label>
    <input
      class="form-check-input"
      type="radio"
      name="radio"
      :id="id"
      :value="value"
      :checked="checked"
      @change="injection?.handleChange(id, $event)"
    />
    <!-- <input
      class="form-check-input"
      v-for="radio in radioButtons"
      type="radio"
      id="exampleRadio1"
      :checked="radio.label === value"
      :value="radio.label"
      @change="injection?.handleChange(id, $event)"
    /> -->
  </div>
</template>

<style lang="scss" scoped></style>
