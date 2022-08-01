import axios from "axios";
import {createStore} from "vuex";

const store = createStore({
    state() {
        return {
            brands: [],
            items: [],
            page: 1,
            itemsPerPage: 8,
            totalPages: 1,
            basketItems: [],
            user: null,
            registrationDialogue: false
        }
    },
    getters: {
      basketItemsIds(state) {
          return state.basketItems.map(el => el.id);
      }
    },
    mutations: {
        addBrands(state, brands) {
            let brandOptions = [];
            brands.forEach(el => {
                const {name, id} = el;
                brandOptions.push({name, id});
            })

            state.brands = brandOptions;
        },
        addItems(state, items) {
            let myItems = [];
            items.forEach(el => {
                const {name, id, price, img, brandId} = el;
                myItems.push({name, id, price, img, brandId});
            })

            state.items = state.items.concat(myItems);
        },
        setTotalPages(state, number) {
            state.totalPages = number;
        },
        incrementPage(state) {
            state.page++;
        },
        addItemToBasket(state, item) {
            state.basketItems.push(item);
            localStorage.basketItems = JSON.stringify(state.basketItems);
        },
        setItemsInBasket(state, items) {
            state.basketItems = items;
        },
        removeFromBasket(state, item) {
            state.basketItems.splice(state.basketItems.indexOf(item), 1);
            localStorage.basketItems = JSON.stringify(state.basketItems);
        },
        setUser(state, user) {
          state.user = user;
          localStorage.token = user?.token;
        },
        toggleRegistrationDialogue(state, newState) {
            state.registrationDialogue = newState;
        }
    },
    actions: {
        addBrands({commit}) {
            axios.get(process.env.VUE_APP_BRAND_API)
                .then(res => commit('addBrands', res.data));
        },
        addItems({commit, state}) {
            if (this.state.page <= this.state.totalPages) {
                axios.get(process.env.VUE_APP_DEVICE_API + `?page=${state.page}`)
                    .then(res => {
                        commit('setTotalPages', Math.ceil(res.data.count / state.itemsPerPage));
                        commit('addItems', res.data.rows);
                        commit('incrementPage');
                    });
            }
        }
    }
})

export default store;