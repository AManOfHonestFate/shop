<template>
  <div class="wrapper">
    <div class="presentation">
      <h3 :class="{'small': this.small}">{{ this.title }}</h3>
      <hr :class="{
        'line': true,
        'small': this.small
      }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "PresentationTemplate",
  props: {
    title: String,
    small: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

.wrapper {
  font-family: 'Playfair Display', serif;
  font-size: 36px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #0f0f0f;
}

.transparent {
  background-color: transparent;
}

.presentation {
  display: flex;
  flex-direction: column;
  margin: 0 auto auto;
  align-items: center;
  width: 70%;
}

.presentation h3 {
  color: #ffffff;
  text-transform: uppercase;
  margin: 2em 0;
}

h3.small {
  margin: 1em 0;
  font-size: 28px;
}

.line {
  width: 3em;
  margin-bottom: 1.5em;
}

.line.small {
  margin-bottom: 1em;
}
</style>