/**
* Created by LinChuQiang on 2017/9/2.
*/
<template>
	<h1>notFound</h1>
</template>
<style scoped = "true" lang = "scss"></style>
<script>
	import {mapGetters, mapActions, mapMutations} from 'vuex'
	import * as type from '../store/constant.js'
	import * as util from '../assist/utils'
	export default {
		name      : 'notFound',
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

