<template>
  <select
      v-model.number="modelValue"
      class="select"
      @change="changeBrand"
  >
    <option disabled value="">{{ defaultValue }}</option>
    <option
        v-for="option in this.options"
        :value="option.id"
        :key="option.id"
    >
      {{option.name}}
    </option>
  </select>
</template>

<script>
export default {
  name: "MySelect",
  props: {
    modelValue: Number,
    options: {
      type: Array,
      default: () => []
    },
    defaultValue: {
      type: String,
      default: 'Выберите сортировку'
    }
  },
  emits: {
    'update:modelValue': null
  },
  methods: {
    changeBrand(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style scoped>

.select {
  width: 180px;
  padding: 0.7em;
}

.select option {
  font-size: 16px;
  text-transform: capitalize;
}

</style>