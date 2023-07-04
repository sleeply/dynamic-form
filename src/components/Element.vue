<script setup lang="ts">
import Checkbox from "./Checkbox.vue";
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
      v-if="field.type === 'text'"
      :label="field.label"
      :value="field.value"
      :id="field.field_id"
    />

    <Select
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
      v-if="field.type === 'checkbox'"
      :label="field.label"
      v-model:value="field.value"
      :id="field.field_id"
    />

    <Radio
      v-if="field.type === 'radio'"
      :label="field.label"
      :value="field.value"
      :id="field.field_id"
      :radio-buttons="field.radio_buttons"
    />

    <TextArea
      v-if="field.type === 'textarea'"
      :label="field.label"
      :value="field.value"
      :id="field.field_id"
      :placeholder="field.placeholder"
    />
  </div>
</template>

<style lang="scss" scoped></style>
