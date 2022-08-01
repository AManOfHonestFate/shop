<template>
  <div class="wrapper">
    <div class="info">
      <Info>
        <template v-slot:title>
          О Магазине
        </template>
        <template v-slot:body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh. Egestas amet consectetur vel vitae aliquam dictum suspendisse. Lobortis eget consequat, tellus et et sed turpis. Pretium quisque vitae, amet, porttitor odio ultricies massa pharetra leo. Et ipsum urna fames in sit mi ultrices nisi, nunc.
        </template>
      </Info>
      <Info>
        <template v-slot:title>
          Категории
        </template>
        <template v-slot:body>
          <div class="categories">
            <Category v-for="category in this.categories">
              {{ category }}
            </Category>
          </div>
        </template>
      </Info>
      <Info>
        <template v-slot:title>
          Рассылка
        </template>
        <template v-slot:body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh.
        </template>
      </Info>
    </div>
  </div>
</template>

<script>
import Info from "@/UI/Info";
import Category from "@/UI/Category";
export default {
  name: "FooterInfo",
  components: {Category, Info},
  data() {
    return {
      categories: ['Часы', 'Браслеты', 'Ремни', 'Ювелирные изделия', 'Запонки']
    }
  }
}
</script>

<style scoped>

.wrapper {
  display: flex;
  background: #0f0f0f url("@/assets/footer.png") no-repeat center;
}

.info {
  margin: auto;
  width: 70%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.info > * {
  width: 30%;
}

.categories {
  display: flex;
  flex-wrap: wrap;
}

.categories > * {
  margin: 0 0.5em 1em 0;
}

</style>