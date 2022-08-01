<template>
  <header class="header">
    <HeaderTop></HeaderTop>
    <MyNavbar></MyNavbar>
  </header>
</template>

<script>

import HeaderTop from "@/components/HeaderTop";
import MyNavbar from "@/components/MyNavbar";

export default {
  name: "MyHeader",
  components: {MyNavbar, HeaderTop},
  emits: {
    'update:visible': null
  }
}
</script>

<style scoped>

.header {
  font-family: "PT Sans", sans-serif;
  font-weight: 400;
  position: sticky;
  top: 0;
  z-index: 1;
}

</style>