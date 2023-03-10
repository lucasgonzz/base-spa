export default {
	methods: {
		can(permission_slug) {
			let has_permission = false
		    if (this.is_owner) {
		        has_permission = true
		    }
			if (!has_permission) {
				has_permission = this.hasPermissionTo(permission_slug)
			}
			console.log('permiso para '+permission_slug+': '+has_permission)
			return has_permission
		},
		hasPermissionTo(permission_slug) {
			let has_permission = false
			this.user.permissions.forEach(permission => {
	            if (permission.slug == permission_slug) {
	                has_permission = true
	            }
	        })
	        return has_permission
		},
		hasPermissionForRoute() {
			let route_name = this.getRoutePermissionSlug()
			console.log('viendo permisos para la ruta: '+route_name)
			if (this.can(route_name)) {
				return true 
			} else {
				this.redirect()
			}
		},
		redirect() {
			console.log('entro a redirect')
			let routes = this.$router.options.routes
			let route_name
			for (var i = routes.length - 1; i >= 0; i--) {
				let route_name = this.getRoutePermissionSlug(routes[i].name)
				console.log('viendo permiso para la ruta '+route_name) 
				if (this.can(route_name)) {
					this.$router.push({name: routes[i].name})
					break 		  
				} 
			}
			console.log('NO TIENE PERMISO PARA NINGUNA RUTA')
		},
		getRoutePermissionSlug(route_name = null) {
			if (!route_name) {
				route_name = this.route_name
			}
			if (route_name == 'abm') {
				route_name = this.view 
				console.log('la ruta era abm, ahora va a ser '+route_name)
			} else {
				route_name += '.index'
				console.log('route_name quedo en: '+route_name)
			}
			return route_name
		}
	}
}