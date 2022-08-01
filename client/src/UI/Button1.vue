<template>
  <div class="button">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Button-1",
  props: {
    current: {
      type: Boolean
    }
  }
}
</script>

<style scoped>
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5em;
    cursor: pointer;
    color: grey;
  }

  .button:hover {
    background-color: #2e2e2e;
  }

  .current {
    background-color: #1f1f1f;
    color: #ffffff;
  }
</style>