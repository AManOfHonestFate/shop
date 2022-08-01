<template>
  <div class="item">
    <div class="item-main">
      <h5 class="name">{{ this.item.name }}</h5>
      <img class="image" :src="'http://localhost:5000/'+this.item.img" alt="watch">
    </div>
    <div class="item-description">
      <p class="price"><strong>Цена</strong>: {{this.item.price}} руб</p>
      <h4>Описание</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh. Egestas amet consectetur vel vitae aliquam dictum suspendisse. Lobortis eget consequat, tellus et et sed turpis. Pretium quisque vitae, amet, porttitor odio ultricies massa pharetra leo. Et ipsum urna fames in sit mi ultrices nisi, nunc.</p>
      <div v-if="this.item.info.length" class="item-info">
        <h5 class="name">Свойства</h5>
        <p v-for="el in this.item.info">
          <strong>{{el.description}}</strong>: {{el.title}}
        </p>
      </div>
    </div>
    <Button2 @click="addToBasket" style="align-self: flex-end; min-width: 140px">
      <template v-if="buy">Добавить в корзину</template>
      <template v-else>Убрать из корзины</template>
    </Button2>
  </div>
</template>

<script>
export default {
  name: "ProductInfo",
  components: {},
  data() {
    return {
      buy: true
    }
  },
  props: {
    item: Object
  },
  methods: {
    addToBasket() {
      if (this.buy) {
        this.$store.commit('addItemToBasket', this.item);
      } else {
        this.$store.commit('removeFromBasket', this.item);
      }
      this.buy = !this.buy;
    }
  },
  mounted() {
    if (this.$store.getters.basketItemsIds.indexOf(this.item.id) > -1) {
      this.buy = false;
    }
  }
}
</script>

<style scoped>

.item {
  color: #ffffff;
  background-color: #0f0f0f;
  border: 1px solid #2e2e2e;
  border-radius: 5%;
  padding: 10px;
  display: flex;
}

.item-main {
  margin-right: 15px;
}

.name {
  font-size: 20px;
  margin-bottom: 0.5em;
}

.image {
  margin-bottom: 10px;
  width: 200px;
  height: 240px;
}

.item-info {
  margin-top: 10px;
}
</style>