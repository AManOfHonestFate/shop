import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import HomePage from "@/pages/HomePage";
import Catalogue from "@/pages/Catalogue";
import PersonalAccount from "@/pages/PersonalAccount";
import ItemInfo from "@/pages/ItemInfo";

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        name: 'catalogue',
        path: '/catalogue',
        component: Catalogue
    },
    {
        path: '/account',
        component: PersonalAccount
    },
    {
        path: '/item/:id',
        component: ItemInfo
    }
]

const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
)

export default router