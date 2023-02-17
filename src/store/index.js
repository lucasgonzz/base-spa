import Vue from 'vue'
import Vuex from 'vuex'

import auth from '@/common-vue/store/auth'
import employee from '@/common-vue/store/employee'
import permission from '@/common-vue/store/permission'
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
        employee,
        permission,
        product,
        sale,
    }
})
