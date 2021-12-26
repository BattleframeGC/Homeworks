import { createStore } from 'vuex';
import {goods} from "../assets/data.js";

export default createStore({
    state: {
        goods,
        cart: []
    },
    mutations: {
        SET_CART: (state, good) => {

            if (state.cart.length) {
                let isExists = false;
                state.cart.map(function(item) {
                    if (item.id === good.id) {
                        isExists = true;
                        if(item.quantity < item.count) item.quantity++;
                    }
                });
                if (!isExists) {
                        state.cart.push(good);
                        good.quantity = 1;
                }
            } else {
                state.cart.push(good);
                good.quantity = 1;
            }
        },
        REMOVE_CART: (state, index) => {
            state.cart.splice(index,1)
        },
        DEC_QUANT: (state, index) => {
            state.cart[index].quantity--;
                if(state.cart[index].quantity===0) state.cart.splice(index,1)
        },
        INC_QUANT: (state, index) => {
            if(state.cart[index].quantity < state.cart[index].count) state.cart[index].quantity++;
        }
    },
    actions: {
        ADD_TO_CART({commit}, good){
            commit('SET_CART',good);
        },
        DELETE_FROM_CART({commit}, index){
            commit('REMOVE_CART', index);
        },
        DECREASE_QUANTITY({commit}, index){
            commit('DEC_QUANT', index);
        },
        INCREASE_QUANTITY({commit}, index){
            commit('INC_QUANT', index);
        }
    },
    getters: {
        GOODS(state){
            return state.goods;
        },
        CART(state){
            return state.cart;
        }
    }
})
