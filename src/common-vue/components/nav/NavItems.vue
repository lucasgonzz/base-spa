<template>
	<b-navbar-nav>
		<template>

		    <b-nav-item 
		    v-for="(route, index) in routes"
		    :key="index"
		    class="apretable"
		    :class="isActiveRoute(route)"
		    @click="setRoute(route)">
		    	{{ routeText(route) }}
			</b-nav-item>

		</template>
	</b-navbar-nav>
</template>
<script>
import nav from '@/common-vue/mixins/nav'
export default {
	mixins: [nav],
	props: {
		routes: Array,
	},
}
</script>