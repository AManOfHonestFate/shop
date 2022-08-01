<template>
  <footer>
    <FooterInfo></FooterInfo>
    <p class="bottom">
      © 2022 Все права защищены
    </p>
  </footer>
</template>

<script>
import FooterInfo from "@/components/FooterInfo";
export default {
  name: "Footer",
  components: {FooterInfo}
}
</script>

<style scoped>

.bottom {
  color: #808080;
  background-color: #0f0f0f;
  font-family: "PT Sans", sans-serif;
  font-size: 14px;
  padding: 1em 0 1em 15%;
}

</style>