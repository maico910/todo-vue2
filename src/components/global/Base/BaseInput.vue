<template>
  <q-input
    :value="value"
    v-bind="$attrs"
    :label="label"
    :rules="rules"
    v-on="$listeners"
    @input="(val) => {$emit('update:value', val)}"
  />
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    label: {
      type: String,
      default: 'Campo'
    },
    value: {
      type: [String, Number]
    },
    rules: {
      type: Array,
      default: null
    }
  }
}
</script>
