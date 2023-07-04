<script setup lang="ts">
import type { IFormProvider, ISelecOption } from "@/modules/Form";
import { inject } from "vue";

interface IProps {
  id: string;
  label: string;
  placeholder?: string;
  value: string;
  options: ISelecOption[];
}

const injection = inject<IFormProvider>("handleChange");
defineProps<IProps>();
</script>

<template>
  <div>
    <label for=""> {{ label }} </label>
    <select
    class="form-select"
      @change="injection?.handleChange(id, $event)"
      aria-label="Default select example"
    >
      <!-- <option>---</option> -->

      <option v-for="option in options" :value="option.label">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<style lang="scss" scoped></style>
