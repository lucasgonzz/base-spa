import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/common-vue/views/Login')
    },
    {
        path: '/recuperar-clave/:view?/:sub_view?',
        name: 'passwordReset', 
        component: () => import('@/common-vue/views/PasswordReset')
    },
    {
        path: '/configuracion/:view?/:sub_view?',
        name: 'configuration',
        component: () => import('@/common-vue/views/Configuration')
    },
    // {
    //     path: '/abm/:view?',
    //     name: 'abm',
    //     component: () => import('@/common-vue/views/Abm')
    // },
    {
        path: '/empleados',
        name: 'employee',
        component: () => import('@/common-vue/views/Employee')
    },
    
    {
        path: '/productos',
        name: 'product',
        component: () => import('@/views/Product')
    },
    {
        path: '/ventas',
        name: 'sale',
        component: () => import('@/views/Sale')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
