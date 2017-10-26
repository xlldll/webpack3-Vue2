/**
* Created by LinChuQiang on 2017/9/2.
*/
<template>
	<!--app.vue的容器页-->
	<div>
		<div class = "fixed-bar">
			<mu-appbar title = "网易云音乐">
				<mu-text-field icon = "search" class = "appbar-search-field" slot = "right" hintText = "请输入搜索内容" />
			</mu-appbar>
			<mu-tabs :value = "activeTab" @change = "tabChange_m">
				<mu-tab value = "Startup" icon = "home" title = "主页" />
				<mu-tab value = "SongLists" icon = "favorite" title = "所有推荐歌单" />
			</mu-tabs>
		</div>
		<mu-back-top :bottom = "100" :right = "0" />
		<div class = "default-view">
			<keep-alive>
				<router-view v-if = "$route.meta.keepAlive"></router-view>
			</keep-alive>
			<router-view v-if = "!$route.meta.keepAlive"></router-view>
		</div>
	</div>
</template>

<style lang = "scss" scoped>

</style>

<script>
	
	import {mapGetters, mapActions, mapMutations} from 'vuex'
	
	import * as type from '../store/constant.js'
	import * as util from '../assist/utils'
	export default {
		name      : 'home',
		data () {
			return {
				activeTab: "Startup"
			}
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
		created(){
			this.tabChange_m('Startup')
		},
		beforeMount(){},
		mounted(){},
		beforeUpdate(){},
		updated(){},
		activated(){},
		deactivated(){},
		beforeDestroy(){},
		destroyed(){},
		watch     : {},
		computed  : {},
		methods   : {
			tabChange_m(val){
				this.activeTab = val
				this.$router.push({name: val})
			},
		},
		filters   : {}
	}
</script>

