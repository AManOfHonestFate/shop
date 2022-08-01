<template>
  <div v-if="items.length" class="products">
    <ProductItem
        v-for="item in this.items"
        v-bind="item"
        :key="item.id"
    ></ProductItem>
  </div>
  <div v-else class="not-found">
    <p>Товары не найдены</p>
  </div>
</template>

<script>
import ProductItem from "@/components/ProductItem";
export default {
  name: "ProductsList",
  components: {ProductItem},
  props: {
    items: Array
  }
}
</script>

<style scoped>

.products {
  margin: 16px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 16px;
}

.not-found {
  display: flex;
  justify-content: center;
  margin: 2em 0;
  font-size: 30px;
  color: #c70101;
}

</style>