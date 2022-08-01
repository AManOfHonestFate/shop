<template>
  <div class="wrapper">
    <div class="navbar-top">
      <div class="phone">
        <img src="@/assets/Phone.svg" alt="phone">
        <p>8 (812) 123-45-67</p>
      </div>
      <p class="borders">Работаем 7 дней в неделю</p>
      <p>9:00 — 18:00</p>
      <div class="sign-in">
        <div v-if="!email" class="sign-in-img">
          <img src="@/assets/SignIn-1.svg" alt="sign in">
          <img src="@/assets/SignIn-2.svg" alt="">
        </div>
        <router-link v-if="email" to="/account" style="text-decoration: none; color: grey">
          <p>{{ email }}</p>
        </router-link>
        <p v-else="email" @click="openDialogue">Войти / Регистрация</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "HeaderTop",
  emits: {
    'update:visible': null
  },
  computed: {
    email() {
      return this.$store.state.user?.email;
    }
  },
  methods: {
    openDialogue() {
      this.$store.commit('toggleRegistrationDialogue', true);
    }
  }
}
</script>

<style scoped>

  .wrapper {
    display: flex;
    background-color: #000000;
    width: 100%;
    font-size: 12px;
  }

  .navbar-top {
    margin: auto;
    display: flex;
    padding: 1em 0;
    min-width: 70%;
    color: grey;
  }

  p {
    padding: 0 1em;
  }

  .phone {
    display: flex;
    cursor: pointer;
  }

  .phone:hover {
    filter: brightness(1.5);
  }

  .borders {
    border-left: 1px solid grey;
    border-right: 1px solid grey;
  }

  .sign-in {
    position: relative;
    display: flex;
    margin-left: auto;
    cursor: pointer;
  }

  .sign-in:hover {
    filter: brightness(1.5);
  }

  .sign-in-img *{
    position: absolute;
  }

  .sign-in-img img:last-child {
    top: 0.2em;
    left: -0.1em;
  }
</style>