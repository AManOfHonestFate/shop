<template>
  <div @click="setInputVisible(false)" class="wrapper">
    <div class="navbar">
      <h2 class="logo">PORTEN</h2>
      <span
          v-for="(page, idx) in this.pages"
          @click.capture="idx + 1 === pages.length && !isAuth ? preventRouting($event) : null"
      >
          <router-link
              :to="page.path"
              style="text-decoration: none"
          >
            <Button1
                :class="{
                'current': page.path === $route.path
              }"
            >
              {{page.name}}
            </Button1>
          </router-link>
      </span>
      <Button1 @click="toggleVisible" style="position: relative">
        <img src="@/assets/cart.svg" alt="cart">
        <div class="number-items">
          <p>{{this.numberOfItems}}</p>
        </div>
      </Button1>
      <Button1 @click.stop="setInputVisible(true)" style="position: relative">
        <img src="@/assets/search.svg" alt="search">
        <MyInput
            v-if="inputVisible"
            style="position: absolute; bottom: -2em; right: 0; width: 200px"
            v-model="search"
            @keydown.enter="routeToCatalogue"
        ></MyInput>
      </Button1>
    </div>
  </div>
  <MyDialogue class="big" v-model:visible="visible">
    <Basket v-model:visible="visible"></Basket>
  </MyDialogue>
</template>

<script>
import Basket from "@/components/Basket";
import Button1 from "@/UI/Button1";

export default {
  name: "MyNavbar",
  components: {Button1, Basket},
  data() {
    return {
      pages: [
        {path: '/', name: 'Главная'},
        {path: '/catalogue', name: 'Товары'},
        {path: '/account', name: 'Личный кабинет'},
      ],
      visible: false,
      inputVisible: false,
      search: ''
    }
  },
  computed: {
    numberOfItems() {
      return this.$store.state.basketItems.length;
    },
    isAuth() {
      return this.$store.state.user;
    }
  },
  methods: {
    toggleVisible() {
      this.visible = true;
    },
    preventRouting(e) {
      e.preventDefault();
      this.$store.commit('toggleRegistrationDialogue', true);
    },
    setInputVisible(value) {
      this.inputVisible = value;
    },
    routeToCatalogue() {
      this.inputVisible = false;
      this.$router.push({name: 'catalogue', params: {search: this.search}});
    }
  },
}
</script>

<style scoped>

.wrapper {
  display: flex;
  width: 100%;
  color: #969696;
  font-size: 14px;
  background-color: #0f0f0f;
}

.navbar {
  margin: auto;
  width: 70%;
  display: flex;
}

.logo {
  font-family: "Post No Bills Jaffna", sans-serif;
  font-size: 36px;
  font-weight: 600;
  margin: auto auto auto 0;
  color: #ffffff;
}

.number-items {
  border-radius: 50%;
  background-color: #c70101;
  width: 15px;
  height: 15px;
  color: #ffffff;
  position: absolute;
  display: flex;
  bottom: 12px;
  right: 12px;
}

.number-items p {
  margin: auto;
}
</style>