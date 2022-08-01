<template>
  <div class="item" @click="redirectToInfo">
    <img class="image" :src="'http://localhost:5000/'+this.item.img" alt="watch">
    <h5 class="name">{{ this.item.name }}</h5>
    <div class="end">
      <p class="price">{{this.item.price}} руб</p>
      <Button2 class="black delete" @click.stop="removeItem">Убрать</Button2>
    </div>
  </div>
</template>

<script>

export default {
  name: "BasketItem",
  props: {
    item: Object
  },
  emits: {
    'update:visible': null
  },
  methods: {
    removeItem() {
      this.$store.commit('removeFromBasket', this.item);
    },
    redirectToInfo() {
      this.$router.push(`/item/${this.item.id}`);
      this.$emit('update:visible', false);
    }
  }
}
</script>

<style scoped>
  .item {
    display: flex;
    padding: 10px;
    cursor: pointer;
  }

  .image {
    width: 80px;
    height: 100px;
    margin-right: 10px;
  }

  .end {
    margin-left: auto;
  }

  .price {
    margin-bottom: 15px;
  }
</style>