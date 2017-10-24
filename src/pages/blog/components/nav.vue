/**
* Created by LinChuQiang on 2017/8/21.
*/
<template>
	<nav :class = "menuTog_c">
		<ul>
			<li>
				<router-link :to = "{name:'archives'}">文章合集 Archives</router-link>
			</li>
			<li>
				<router-link :to = "{name:'categories'}">文章分类 Categories</router-link>
			</li>
			<li>
				<router-link :to = "{name:'tags'}">文章标签 Tags</router-link>
			</li>
			<li>
				<router-link :to = "{name:'about'}">关于 About</router-link>
			</li>
		</ul>
	</nav>
</template>
<script>
	import {mapActions, mapGetters} from 'vuex'
	import * as type from '../store/constant'
	
	export default {
		name      : 'nav',
		data () {
			return {}
		},
		props     : {},
		components: {},
		mounted(){},
		watch     : {},
		computed  : {
			...mapGetters([type.FLT.menuToggle]),
			menuTog_c(){
				return this[type.FLT.menuToggle] ? 'active' : '';
			}
		},
		methods   : {
		
		},
		filters   : {}
	}
</script>
<style lang = "scss" scoped="true">

</style>

