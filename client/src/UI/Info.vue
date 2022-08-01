<template>
  <div>
    <h3 class="title"><slot name="title"></slot></h3>
    <p class="body"><slot name="body"></slot></p>
  </div>
</template>

<script>
export default {
  name: "Info"
}
</script>

<style scoped>

.title {
  padding: 2.5em 0 1.5em;
  font-family: 'Playfair Display', serif;
  font-size: 24px;
  color: white;
}

.body {
  padding-bottom: 2.5em;
  font-family: "PT Sans", sans-serif;
  font-size: 14px;
  color: white
}
</style>