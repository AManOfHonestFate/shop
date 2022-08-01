<template>
  <div id="app">
    <MyHeader></MyHeader>
    <router-view></router-view>
    <Footer></Footer>
    <MyDialogue :visible="dialogueVisible" @update:visible="toggleVisible">
      <RegistrationForm></RegistrationForm>
    </MyDialogue>
  </div>
</template>

<script>

import Footer from "@/components/Footer";
import MyHeader from "@/components/MyHeader";
import RegistrationForm from "@/components/RegistrationForm";
import axios from "axios";
import jwtDecode from "jwt-decode";

export default {
  name: 'App',
  components: {RegistrationForm, MyHeader, Footer,},
  computed: {
    dialogueVisible() {
      return this.$store.state.registrationDialogue;
    }
  },
  methods: {
    toggleVisible() {
      this.$store.commit('toggleRegistrationDialogue', false);
    }
  },
  mounted() {
    this.$store.dispatch('addBrands');
    this.$store.dispatch('addItems');
    if (localStorage.token) {
      const header = `Bearer ${localStorage.token}`;
      axios.get(process.env.VUE_APP_AUTH, {headers: {"Authorization": header}})
          .then(res => {
            const token = res.data.token;
            const userInfo = jwtDecode(token);
            this.$store.commit('setUser', {email: userInfo.email, role: userInfo.role, token});
          })
          .catch(err => console.log(err));
    }
    if (localStorage.basketItems) {
      this.$store.commit('setItemsInBasket', JSON.parse(localStorage.basketItems));
    }
  }
}
</script>

<style>

@import url('http://fonts.cdnfonts.com/css/post-no-bills-jaffna');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');

*,
*::after,
*::before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  background-color: #0f0f0f;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
