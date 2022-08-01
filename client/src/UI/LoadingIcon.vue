<template>
  <img class="loader" alt="loader" src="../assets/loader.png">
</template>

<script>
export default {
  name: "LoadingIcon"
}
</script>

<style scoped>
@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
.loader {
  width: 100px;
  height: 100px;
  animation: spin 1s;
  animation-iteration-count: infinite;
}
</style>