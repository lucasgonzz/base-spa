export default {
	methods: {
        redirectIfWww() {
            if (location.href.indexOf("www.") > -1) {
                console.log('tiene www')
                location.replace(process.env.VUE_APP_APP_URL);
            }
        },
        async callMethods(models) {
            this.$store.commit('auth/setLoading', true)

            models.forEach(model_name => {
                this.$store.dispatch(model_name+'/getModels')
                this.updateMessage('Descargando '+this.plural(model_name))
            })
            
            this.$store.commit('auth/setLoading', false)
            this.updateMessage('')
        },
        updateMessage(message) {
            if (!this.there_is_update) {
                this.$store.commit('auth/setMessage', message)
            }
        }
	}
}