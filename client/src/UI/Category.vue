<template>
  <h4 class="category">
    <slot></slot>
  </h4>
</template>

<script>
export default {
  name: "Category"
}
</script>

<style scoped>

.category {
  background-color: #0f0f0f;
  padding: 0.7em;
}

</style>