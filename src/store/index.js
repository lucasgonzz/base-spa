import Vue from 'vue'
import Vuex from 'vuex'

import auth from '@/common-vue/store/auth'
import employee from '@/common-vue/store/employee'
import permission from '@/common-vue/store/permission'
import general from '@/common-vue/store/general'
import download_resources from '@/common-vue/store/download_resources'
import error from '@/common-vue/store/error'
import belongs_to_many from '@/common-vue/store/belongs_to_many'


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
        general,
        download_resources,
        error,
        belongs_to_many,

        product,
        sale,
    }
})
