<template>
  <div class="first-catalogue">
    <PresentationTemplate title="Сезон 2021/22" :small="true">
      <div class="new-season-items">
        <ProductItem v-if="this.items.length" v-for:="item in this.items" v-bind="item" class="small"></ProductItem>
        <LoadingIcon v-else></LoadingIcon>
      </div>
    </PresentationTemplate>
    <img class="image" alt="first catalogue" src="https://s3-alpha-sig.figma.com/img/a213/481a/13ae375788f6b0be7f5a349d5f5d2a2b?Expires=1659312000&Signature=KLK4A-CoxFblsJkVvqgitxYQ4dAZnwxKmRcbZK-wDYVjPkt57t-JjMSwb9NzKolfH~MhPFi7FGFTtQxKSIMJJjVzw~PHvxUI-EQjNX6Zh64fL4y5NV9uFHx00iSlgFSUalfdzucNS2ys7RMUlGKBViPKS1JnzL8kTFO-L~MMAjFzsoVnhN~lDdYSHLZdI3SCiDkNZMk0Jn9CndaSVkn~kcaSbB3u2jmwn38M4du1Uv6iqEikoKGISeboCcahXT3f2GHgX1UUUAtgBLsANaKJpfCQR5SO0SR4KTWp5pX2Icn26HxfpFs8hPglBsK72LGdh8B-pJomRnTuoKOxLT3Tog__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA">
    <div class="container">
      <PresentationTemplate :small="true" class="transparent" title="Новая Коллекция">
        <router-link to="/catalogue">
          <Button2>Каталог</Button2>
        </router-link>
      </PresentationTemplate>
    </div>
  </div>
</template>

<script>

import ProductItem from "@/components/ProductItem";

export default {
  name: "FirstCatalogue",
  components: {ProductItem},
  props: {
    items: Array
  }
}
</script>

<style scoped>

.first-catalogue {
  display: flex;
  position: relative;
}

.new-season-items {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1em;
  margin: 0.3em;
}

.image {
  width: 45%;
}

.container {
  width: 45%;
  position: absolute;
  background-color: transparent;
  right: 0;
  bottom: 5%;
}

</style>