<template>
  <div class="first-screen">
    <img src="@/assets/logo.svg" alt="logo">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est tortor pulvinar ut in. Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum nec ut iaculis. Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh magna feugiat id nunc, dui nisl viverra.</p>
  </div>
  <FirstCatalogue :items="this.items"></FirstCatalogue>
  <SecondCatalogue></SecondCatalogue>
  <FirstScreenCatalogue></FirstScreenCatalogue>
  <PresentationTemplate title="Наши Брэнды">
    <div class="logos">
      <img alt="logo" src="https://s3-alpha-sig.figma.com/img/6637/9f5a/f2986c938510cd895f174ae1281d82eb?Expires=1658707200&Signature=bbBqDGdKOmIyXbeu5cTw2WrwKONJc~WzZ0KPK-iWPy4vSFjZna6RQWRT8u3OvZhKiSNvC3n94Kl4mZv4L1M7Bub41irR~V-XmetxBOu9q4200tFcr-lz0zQctthrFMAW3JaTl1ezbp6foWaeEabMRC2cbf2vmRfhlMmrMQ0HPyd-Y0qy5EaeTZy3GW6lTo4cxebDzlRe4NvyqQlipqM-mZXhidUGlmOjUbTSR9b8EOWHm3WDoe~D3DN~40jdRqbip9qNX6cnaoB9FYTKB8vxAqjHywxD7ioHboCQTMn05TMGLaA~eIesepHsLcFL~CnDkRxARpxCPki8~~vWqnLPzg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA">
      <img alt="logo" src="https://s3-alpha-sig.figma.com/img/6637/9f5a/f2986c938510cd895f174ae1281d82eb?Expires=1658707200&Signature=bbBqDGdKOmIyXbeu5cTw2WrwKONJc~WzZ0KPK-iWPy4vSFjZna6RQWRT8u3OvZhKiSNvC3n94Kl4mZv4L1M7Bub41irR~V-XmetxBOu9q4200tFcr-lz0zQctthrFMAW3JaTl1ezbp6foWaeEabMRC2cbf2vmRfhlMmrMQ0HPyd-Y0qy5EaeTZy3GW6lTo4cxebDzlRe4NvyqQlipqM-mZXhidUGlmOjUbTSR9b8EOWHm3WDoe~D3DN~40jdRqbip9qNX6cnaoB9FYTKB8vxAqjHywxD7ioHboCQTMn05TMGLaA~eIesepHsLcFL~CnDkRxARpxCPki8~~vWqnLPzg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA">
      <img alt="logo" src="https://s3-alpha-sig.figma.com/img/6637/9f5a/f2986c938510cd895f174ae1281d82eb?Expires=1658707200&Signature=bbBqDGdKOmIyXbeu5cTw2WrwKONJc~WzZ0KPK-iWPy4vSFjZna6RQWRT8u3OvZhKiSNvC3n94Kl4mZv4L1M7Bub41irR~V-XmetxBOu9q4200tFcr-lz0zQctthrFMAW3JaTl1ezbp6foWaeEabMRC2cbf2vmRfhlMmrMQ0HPyd-Y0qy5EaeTZy3GW6lTo4cxebDzlRe4NvyqQlipqM-mZXhidUGlmOjUbTSR9b8EOWHm3WDoe~D3DN~40jdRqbip9qNX6cnaoB9FYTKB8vxAqjHywxD7ioHboCQTMn05TMGLaA~eIesepHsLcFL~CnDkRxARpxCPki8~~vWqnLPzg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA">
      <img alt="logo" src="https://s3-alpha-sig.figma.com/img/6637/9f5a/f2986c938510cd895f174ae1281d82eb?Expires=1658707200&Signature=bbBqDGdKOmIyXbeu5cTw2WrwKONJc~WzZ0KPK-iWPy4vSFjZna6RQWRT8u3OvZhKiSNvC3n94Kl4mZv4L1M7Bub41irR~V-XmetxBOu9q4200tFcr-lz0zQctthrFMAW3JaTl1ezbp6foWaeEabMRC2cbf2vmRfhlMmrMQ0HPyd-Y0qy5EaeTZy3GW6lTo4cxebDzlRe4NvyqQlipqM-mZXhidUGlmOjUbTSR9b8EOWHm3WDoe~D3DN~40jdRqbip9qNX6cnaoB9FYTKB8vxAqjHywxD7ioHboCQTMn05TMGLaA~eIesepHsLcFL~CnDkRxARpxCPki8~~vWqnLPzg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA">
    </div>
  </PresentationTemplate>
</template>

<script>
import Footer from "@/components/Footer";
import FooterInfo from "@/components/FooterInfo";
import FirstScreenCatalogue from "@/components/FirstScreenCatalogue";
import SecondCatalogue from "@/components/SecondCatalogue";
import FirstCatalogue from "@/components/FirstCatalogue";
export default {
  name: "HomePage",
  components: {FirstCatalogue, SecondCatalogue, FirstScreenCatalogue, FooterInfo, Footer},
  computed: {
    items() {
      return this.$store.state.items.slice(0, 3);
    }
  }
}
</script>

<style scoped>

.first-screen {
  display: flex;
  flex-direction: column;
  align-items: center;

  background-size: 100%;
  background: #0f0f0f url("@/assets/First.png") no-repeat center;
}

.first-screen img {
  margin: 5em 0 4em;
  user-select: none;
}

.first-screen p {
  width: 40%;
  text-align: center;
  color: white;
  margin-bottom: 5em;
}

.logos {
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5em;
}

.logos img {
  width: 20%;
}

</style>