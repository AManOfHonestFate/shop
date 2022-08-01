<template>
  <PresentationTemplate class="black" title="Каталог">
    <ProductsList v-if="items.length" :items="items"></ProductsList>
    <LoadingIcon v-else></LoadingIcon>
  </PresentationTemplate>
</template>

<script>
import ProductsList from "@/components/ProductsList";
export default {
  name: "FirstScreenCatalogue",
  components: {ProductsList},
  computed: {
    items() {
      return this.$store.state.items.slice(0, 8);
    }
  }
}
</script>

<style scoped>
.black {
  background-color: #000000 !important;
}
</style>