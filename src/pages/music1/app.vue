/**
* Created by LinChuQiang on 2017/9/2.
*/
<template>
	<div id = "page">
		<Player></Player>
		<div class = "right_content">
			<Navc></Navc>
			<transition name = "slide-fade">
				<keep-alive>
					<router-view></router-view>
				</keep-alive>
			</transition>
		</div>
	</div>
</template>


<style lang = "scss">
	/*rem 10 ÷ 16 × 100% = 62.5%*/
	html {
		font-size: 62.5%;
		font-family: Helvetica, 'Microsoft YaHei', STXihei, sans-serif;
		font-weight: 400;
	}
	
	ol li, ul li {
		list-style: none;
	}
	
	fieldset, a {
		text-decoration: none;
		color: #000;
	}
	
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
	
	.right_content {
		float: left;
		position: relative;
		
		width: 55%;
		height: 100vh;
		overflow: hidden;
		
		background-color: #3f3d34;
		
	}
</style>

<script>
	import {mapGetters, mapActions, mapMutations} from 'vuex'
	import * as type from './store/constant.js'
	import * as util from './assist/utils'
	
	import Player from './components/player.vue'
	import Navc from './components/nav.vue'
	
	export default {
		name      : 'app',
		data () {
			return {}
		},
		props     : [],
		components: {
			Player,
			Navc
		},
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
		mounted(){
			this[type.UPD.init]()
		},
		beforeUpdate(){},
		updated(){},
		watch     : {},
		computed  : {},
		methods   : {
			...mapActions([type.UPD.init]),
		},
		filters   : {}
	}

</script>

