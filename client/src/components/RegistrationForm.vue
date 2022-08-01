<template>
  <form class="form" @submit.prevent="loginSelected ? login() : register()">
    <h3>
      <template v-if="loginSelected">Вход</template>
      <template v-else>Регистрация</template>
    </h3>
    <p>Логин</p>
    <MyInput required v-model="email"></MyInput>
    <p>Пароль</p>
    <MyInput type="password" required v-model="password"></MyInput>
    <template v-if="!loginSelected">
      <p>Повторите пароль</p>
      <MyInput type="password" required v-model="repeatPassword"></MyInput>
    </template>
    <p v-if="errorMessage" style="color: red">{{errorMessage}}</p>
    <Button2 class="black" style="margin-top: auto">Войти</Button2>
    <p class="login-selector" @click="toggleSelected">
      <template v-if="loginSelected">Не зарегестрированы? Регистрация</template>
      <template v-else>Уже зарегестрированы? Вход</template>
    </p>
  </form>
</template>

<script>
import axios from "axios";
import jwtDecode from "jwt-decode"

export default {
  name: "RegistrationForm",
  data() {
    return {
      loginSelected: true,
      email: "",
      password: "",
      repeatPassword: "",
      errorMessage: ""
    }
  },
  methods: {
    toggleSelected() {
      this.loginSelected = !this.loginSelected;
      this.errorMessage = "";
    },
    login() {
      const formData = new FormData();
      formData.append('email', this.email);
      formData.append('password', this.password);
      axios.post(process.env.VUE_APP_LOGIN_API, formData)
          .then(res => {
            const token = res.data.token;
            const userInfo = jwtDecode(token)
            const user = {email: userInfo.email, role: userInfo.role, token}
            this.$store.commit('setUser', user);
            this.$store.commit('toggleRegistrationDialogue', false);
          })
          .catch(err => {
            this.errorMessage = err.response.data.message;
          });
    },
    register() {
      const formData = new FormData();
      if (this.password !== this.repeatPassword) {
        this.errorMessage = "Пароли не совпадают"
        return;
      }
      formData.append('email', this.email);
      formData.append('password', this.password);
      axios.post(process.env.VUE_APP_REGISTRATION_API, formData)
          .then(res => {
            const token = res.data.token;
            const userInfo = jwtDecode(token)
            const user = {email: userInfo.email, role: userInfo.role, token}
            this.$store.commit('setUser', user);
            this.$store.commit('toggleRegistrationDialogue', false);
          })
          .catch(err => {
            this.errorMessage = err.response.data.message;
          });

    }
  }
}
</script>

<style scoped>
  .form {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  .form p {
    margin: 1em 0;
  }

  .form .login-selector {
    margin-top: 1em;
    margin-left: auto;
  }

  .login-selector:hover {
    cursor: pointer;
    text-decoration: underline;
  }

</style>