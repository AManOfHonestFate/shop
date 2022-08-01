<template>
  <main class="catalogue">
    <div class="wrapper">
      <MyInput
          v-model="this.searchPattern"
          placeholder="Поиск"
      ></MyInput>
      <div class="selects">
        <MySelect
            v-model.number="this.brand"
            :options="this.brandOptions"
        ></MySelect>
        <MySelect
            v-model.number="this.sort"
            :options="this.sortOptions"
        ></MySelect>
      </div>
      <ProductsList v-if="this.items.length" :items="this.searched"></ProductsList>
      <LoadingIcon v-else></LoadingIcon>
    </div>
  </main>
  <div
      v-if="items.length"
      v-intersection="loadMorePosts"
      class="observer"
  ></div>
</template>

<script>

import ProductsList from "@/components/ProductsList";

export default {
  name: "Catalogue",
  components: {ProductsList},
  data() {
    return {
      searchPattern: this.$route.params?.search ? this.$route.params.search : '',
      brand: 0,
      sort: 0,
      sortOptions: [
        {name: 'По релевантности', id: 0},
        {name: 'По названию', id: 1},
        {name: 'По цене (по возрастанию)', id: 2},
        {name: 'По цене (по убыванию)', id: 3},
      ]
    }
  },
  computed: {
    items() {
      return this.$store.state.items;
    },
    brandOptions() {
      return [{name: 'Все', id: 0} ,...this.$store.state.brands];
    },
    sortedItems() {
      switch (this.sort) {
        case 0:
          return this.items;
        case 1:
          return [...this.items].sort((a, b) => {
            return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
          });
        case 2:
          return [...this.items].sort((a, b) => {
            return a.price - b.price;
          });
        case 3:
          return [...this.items].sort((a, b) => {
            return b.price - a.price;
          });
      }
    },
    selectedBrand() {
      if (this.brand === 0) return this.sortedItems;
      return this.sortedItems.filter(item => item.brandId === this.brand);
    },
    searched() {
      return this.selectedBrand.filter(item => item.name.toLowerCase().includes(this.searchPattern.toLowerCase()))
    }
  },
  methods: {
    loadMorePosts() {
      this.$store.dispatch('addItems');
    }
  },
}
</script>

<style scoped>

.catalogue {
  background-color: #000000;
  padding: 10px 0;
}

.wrapper {
  width: 70%;
  margin: 0 15%;
  display: flex;
  flex-flow: column;
  align-items: center;
}

.selects {
  display: flex;
  margin: 10px 0 10px auto;
}

.observer {
  width: 100%;
  height: 30px;
}
</style>