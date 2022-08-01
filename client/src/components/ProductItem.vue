<template>
  <router-link :to="'/item/' + id" style="text-decoration: none">
    <div class="item">
      <img class="image" :src="'http://localhost:5000/'+this.img" alt="watch">
      <h5 class="name">{{ this.name }}</h5>
      <p class="price">{{this.price}} руб</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    id: Number,
    name: String,
    img: String,
    price: Number
  }
}
</script>

<style scoped>

.item {
  color: #ffffff;
  font-family: 'Playfair Display', serif;
  cursor: pointer;
}

.image {
  background-color: #191B1C;
  padding: 1em 0.2em;
  max-width: 200px;
  height: 240px;
}

.small .image {
  max-width: 140px;
}

.name {
  font-size: 18px;
  margin: 0.8em 0;
}

.small .name {
  font-size: 14px;
}

.price {
  font-size: 16px;
}

.small .price {
  font-size: 12px;
}

</style>