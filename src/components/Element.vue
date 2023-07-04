<script setup lang="ts">
import Checkbox from "./Checkbox.vue";
import FileInput from "./FileInput.vue";
import Input from "./Input.vue";
import Radio from "./Radio.vue";
import Select from "./Select.vue";
import TextArea from "./TextArea.vue";

interface IProps {
  field: any;
}

defineProps<IProps>();
</script>

<template>
  <div>
    <Input
      class="mt-3"
      v-if="field.type === 'text'"
      :label="field.label"
      :value="field.value"
      :id="field.field_id"
    />
    <FileInput
      class="mt-3"
      v-if="field.type === 'file'"
      :label="field.label"
      :value="field.value"
      :id="field.field_id"
    />

    <Select
      class="mt-3"
      v-if="
        field.type === 'select' && field.options && field.options.length > 0
      "
      :label="field.label"
      :value="field.value"
      :id="field.field_id"
      :options="field.options"
    >
    </Select>
    <Checkbox
      class="mt-3"
      v-if="field.type === 'checkbox'"
      :label="field.label"
      :value="field.value"
      :id="field.field_id"
    />
    <div class="d-flex mt-3" style="gap: 0.625rem">
      <Radio
        class="ml-3"
        v-for="radio in field.radio_buttons"
        :label="radio.label"
        :value="radio.label"
        :id="field.field_id"
        :checked="radio.label === field.value"
      />
    </div>

    <TextArea
      class="mt-3"
      v-if="field.type === 'textarea'"
      :label="field.label"
      :value="field.value"
      :id="field.field_id"
      :placeholder="field.placeholder"
    />
  </div>
</template>

<style lang="scss" scoped></style>
