<template>
  <q-select
    :value="value"
    v-bind="$attrs"
    :label="label"
    :options="[
      ...options
    ]"
    :rules="rules"
    v-on="$listeners"
    @input="(val) => {$emit('update:value', val)}"
  />
</template>

<script>
export default {
  name: 'BaseSelect',
  props: {
    label: {
      type: String,
      default: 'Selecione'
    },
    options: {
      type: Array,
      required: true
    },
    value: {
      type: [String, Object, Number]
    },
    rules: {
      type: Array,
      default: null
    }
  }
}
</script>
