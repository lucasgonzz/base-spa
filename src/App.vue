<template>
    <div id="app">
        <logo-loading></logo-loading>
        <nav-component></nav-component>
        <b-container
        fluid>
            <router-view/>
        </b-container>
    </div>
</template>
<script>
import LogoLoading from '@/common-vue/components/LogoLoading'
import NavComponent from '@/components/nav/Index'

import update_app from '@/common-vue/mixins/update_app'
import app from '@/common-vue/mixins/app'
export default {
    mixins: [update_app, app],
    components: {
        LogoLoading, 
        NavComponent,
    },
    created() {
        this.$store.dispatch('auth/me')
    },
    watch: {
        authenticated() {
            if (!this.authenticated) {
                if (this.route_name != 'passwordReset' && this.route_name != 'login') {
                    this.$router.replace({name: 'login'})
                } 
            } else {
                if (this.route_name != this.route_index) {
                    this.$router.replace({name: this.route_index})
                }
                this.callMethods([
                    'product'
                ])
            }
        }
    },
    methods: {
    }
}
</script>
<style lang="sass">
@import "./sass/fonts/styles.css"
@import '@/common-vue/sass/app.sass'
@import '@/sass/_custom.scss'

</style>
