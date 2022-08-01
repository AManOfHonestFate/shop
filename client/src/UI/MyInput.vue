<template>
  <input
      type="text"
      class="input"
      :value="modelValue"
      @input="changeInput"
  >
</template>

<script>
export default {
  name: "MyInput",
  props: {
    modelValue: [String, Number]
  },
  emits: {
    'update:modelValue': null
  },
  methods: {
    changeInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>

.input {
  padding: 0.7em;
  font-size: 16px;
  width: 100%;
}

</style>