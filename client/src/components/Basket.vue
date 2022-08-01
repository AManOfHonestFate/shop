<template>
  <div class="basket">
    <h3 class="title">Корзина</h3>
    <template v-if="this.items.length">
      <BasketItem
          v-for="item in this.items"
          :item="item"
          @update:visible="toggleVisible"
      ></BasketItem>
    </template>
    <div v-else class="empty">
      Корзина пуста
    </div>
    <div class="total-price">Итог: {{this.totalPrice}} руб</div>
  </div>
</template>

<script>

import BasketItem from "@/components/BasketItem";
export default {
  name: "Basket",
  components: {BasketItem},
  computed: {
    items() {
      return this.$store.state.basketItems;
    },
    totalPrice() {
      if (!this.items.length) return 0;

      return this.items.reduce((prev, curr) => prev + curr.price, 0);
    }
  },
  methods: {
    toggleVisible() {
      this.$emit('update:visible', false);
    }
  }
}
</script>

<style scoped>

.basket {
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 30px;
  margin-bottom: 8px;
}

.empty {
  font-size: 24px;
  color: #c70101;
  margin: 40px 0;
}

.total-price {
  font-size: 24px;
  margin-top: 20px;
  margin-left: auto;
}
</style>