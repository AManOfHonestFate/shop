<template>
  <button class="button2">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button2"
}
</script>

<style scoped>
  .button2 {
    border: 2px solid #ffffff;
    background-color: transparent;
    color: #ffffff;
    font-size: 18px;
    padding: 0.6em 1em;
    cursor: pointer;
  }

  .black {
    border-color: #1f1f1f;
    color: #1f1f1f;
  }

  .button2:hover {
    color: #22ee22;
    border-color: #22ee22;
  }

  .black.delete:hover {
    color: #c70101;
    border-color: #c70101;
  }
</style>