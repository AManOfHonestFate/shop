<template>
  <form class="form" @submit.prevent="addDevice">
    <h4>Добавление товара</h4>
    <p>Название</p>
    <MyInput v-model="name" required></MyInput>
    <p>Цена</p>
    <MyInput v-model.number="price" required></MyInput>
    <p>Брэнд</p>
    <MySelect
        v-model.number="brandId"
        :options="brandOptions"
        defaultValue="Брэнд"
        required
    ></MySelect>
    <p>Изображение</p>
    <input type="file" @change="addFile" required>
    <div class="info">
      <MyInput v-model="infoDescription" placeholder="тип свойства"></MyInput>
      <MyInput v-model="infoTitle" placeholder="свойство"></MyInput>
    </div>
    <Button2
        style="color: #0f0f0f; border-color: #0f0f0f; margin-top: 1em"
    >Добавить</Button2>
  </form>
</template>

<script>

import axios from "axios";
import MyInput from "@/UI/MyInput";

export default {
  name: "NewDeviceForm",
  components: {MyInput},
  data() {
    return {
      name: '',
      price: '',
      brandId: 0,
      img: '',
      infoTitle: '',
      infoDescription: ''
    }
  },
  computed: {
    brandOptions() {
      if (!this.$store.state.brands) return;

      return this.$store.state.brands;
    }
  },
  methods: {
    addFile(e) {
      this.img = e.target.files[0];
    },
    addDevice() {
      const formData = new FormData();
      formData.append('name', this.name);
      formData.append('price', this.price);
      formData.append('brandId', this.brandId);
      formData.append('img', this.img);
      const info = JSON.stringify([{
        title: this.infoTitle,
        description: this.infoDescription
      }])
      formData.append('info', info);

      const header = `Bearer ${localStorage.token}`
      axios.post(process.env.VUE_APP_DEVICE_API, formData, {headers: {"Authorization": header}})
          .then(res => console.log(res))
          .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>

.form p {
  margin: 0.5em 0;
}

.info {
  display: flex;
}

</style>