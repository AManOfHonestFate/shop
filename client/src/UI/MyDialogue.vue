<template>
  <div
      v-show="this.visible"
      class="dialogue"
      @click="toggleVisible"
  >
    <div class="dialogue-content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyDialogue",
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    'update:visible': null
  },
  methods: {
    toggleVisible() {
      this.$emit('update:visible',  false);
    }
  }
}
</script>

<style scoped>

.dialogue {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(31, 31, 31, 0.5);
  display: flex;
  z-index: 2;
}

.dialogue-content {
  width: 35%;
  padding: 2em;
  margin: auto;
  background-color: #eeeeee;
  overflow-y: scroll;
  height: 80%;
}

.big .dialogue-content {
  width: 60%;
}

</style>