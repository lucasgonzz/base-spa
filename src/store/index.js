import Vue from 'vue'
import Vuex from 'vuex'

import auth from '@/store/auth'
import product from '@/store/product'
import sale from '@/store/sale'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        auth,
        product,
        sale,
    }
})
