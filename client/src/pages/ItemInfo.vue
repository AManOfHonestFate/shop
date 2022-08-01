<template>
  <div class="info">
    <ProductInfo v-if="item" :item="item"></ProductInfo>
    <LoadingIcon v-else style="margin: auto"></LoadingIcon>
  </div>
</template>

<script>
import axios from "axios";
import ProductInfo from "@/components/ProductInfo";

export default {
  name: "ItemInfo",
  components: {ProductInfo},
  data() {
    return {
      item: null
    }
  },
  methods: {
    loadItem(id) {
      if (id) {
        axios.get(`http://localhost:5000/api/device/${id}`)
            .then(res => {
              this.item = res.data;
            });
      }
    }
  },
  mounted() {
    this.loadItem(this.$route.params.id);
  },
  created() {
    this.$watch(
        () => this.$route.params,
        function(to, from) {
          this.loadItem(to.id)
        }
    )
  },
}
</script>

<style scoped>

.info {
  width: 70%;
  margin: 20px 0 20px 15%;
  display: flex;
}

</style>