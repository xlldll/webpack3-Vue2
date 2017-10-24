/**
* Created by LinChuQiang on 2017/9/2.
*/
<template>
	<div id = "page">
		<transition name = "slide-fade">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</transition>
	</div>
</template>
<style scoped = "false" lang = "scss">
	/*过渡的-CSS-类名*/
	.slide-fade-enter-active,
	.slide-fade-leave-active {
		transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	.slide-fade-enter,
	.slide-fade-leave-to {
		transform: translateX(10px);
		opacity: 0;
	}
</style>
<script>
	import {mapGetters, mapActions, mapMutations} from 'vuex'
	import * as type from './store/constant.js'
	import * as util from './assist/utils'
	export default {
		name      : 'app',
		data () {
			return {}
		},
		props     : [],
		components: {},
		beforeRouteEnter(to, from, next){
			next()
		},
		beforeRouteUpdate (to, from, next) {
			next()
		},
		beforeRouteLeave (to, from, next) {
			next()
		},
		beforeCreate(){},
		created(){},
		beforeMount(){},
		mounted(){},
		beforeUpdate(){},
		updated(){},
		watch     : {},
		computed  : {},
		methods   : {},
		filters   : {}
	}
</script>

