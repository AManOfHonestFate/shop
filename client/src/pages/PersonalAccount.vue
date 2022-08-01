<template>
  <main v-if="user" class="wrapper">
    <div class="user-info">
      <h2 style="text-transform: capitalize">{{ user.role }}</h2>
      <p>Почта: {{ user.email }}</p>
    </div>
    <div class="addItems" v-if="user.role === 'admin'">
      <p></p>
      <Button2 @click="openDialogue">Добавить товар</Button2>
    </div>
    <Button2 style="margin-left: auto" @click="exit">Выйти</Button2>
  </main>
  <MyDialogue v-model:visible="dialogueVisible">
    <NewDeviceForm></NewDeviceForm>
  </MyDialogue>
</template>

<script>

import NewDeviceForm from "@/components/NewDeviceForm";
export default {
  name: "PersonalAccount",
  components: {NewDeviceForm},
  data() {
    return {
      dialogueVisible: false
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    openDialogue() {
      this.dialogueVisible = true;
    },
    exit() {
      this.$store.commit('setUser', null);
    }
  }
}
</script>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-content: center;
    margin: 30px 15%;
  }

  .user-info {
    display: flex;
    flex-direction: column;
    color: #ffffff;
    height: 200px;
    justify-content: space-evenly;
    font-size: 20px;
  }
</style>