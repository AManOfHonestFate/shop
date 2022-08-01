import { createApp } from 'vue'
import router from "@/router/router";
import store from "@/store";
import directives from "@/directives";
import UI from "@/UI/UI"
import App from '@/App.vue'


const app = createApp(App);

UI.forEach(component => {
    app.component(component.name, component);
})

directives.forEach(directive => {
    app.directive(directive.name, directive.directive);
})

app
    .use(router)
    .use(store)
    .mount('#app')
