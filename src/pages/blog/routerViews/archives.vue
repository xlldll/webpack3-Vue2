/**
* Created by LinChuQiang on 2017/8/21.
*/
<template>
	<div>
		<ul>
			<li v-for = "archive in archives_c" :key = "archive.id">
				<router-link :to = "{name:'post',params:{id:archive.id}}">{{archive.title}}</router-link>
				<span>{{ archive.created | timeFormat}}</span>
			</li>
		</ul>
		<aside class = "pagination">
			<button @click = "prevPage_m" :disabled = "disPrev_m()">前一页</button>
			<button @click = "nextPage_m" :disabled = "disNext_m()">后一页</button>
			<span>{{ page_c }}/{{ pagetotal_c }}</span>
		</aside>
	</div>
</template>
<style scoped = "true" lang = "scss">
	ul {
		width: 70%;
		margin: 0 auto;
		
	}
	
	li {
		margin: 15px 0;
		list-style: none;
		a {
			text-decoration: none;
			color: #000;
		}
		span {
			float: right;
			color: #666;
		}
	}

</style>

<script>
	import {mapGetters, mapActions} from 'vuex'
	import * as type from '../store/constant'
	import {clone} from '../assist/utils'
	
	export default {
		name      : 'archives',
		data () {
			return {}
		},
		props     : [],
		components: {},
		beforeRouteEnter(to,from,next){
			next(vm=>{
				document.title = `文章合集 - ${vm[type.FLT.config].title}`
				vm[type.UPD.headertitle](`文章合集 - Archives`)
			})
			
		},
		beforeCreate(){},
		created(){
			this.getArchives_m()
		},
		beforeMount(){},
		mounted(){},
		beforeUpdate(){},
		updated(){},
		watch     : {
			page_c(){
					this.getArchives_m()
			}
		},
		computed  : {
			...mapGetters([type.FLT.config, type.FLT.archives]),
			page_c(){
				return +this.$route.params.page || 1;
			},
			pagetotal_c(){
				const {
					      [type.FLT.config]: {archives_per_page},
					      [type.FLT.config]: {posts},
				      } = this
				return Math.ceil(posts.length / archives_per_page);
			},
			archives_c(){
				const {page_c} = this
				const archives = this[type.FLT.archives]
				return archives[page_c];
			}
		},
		methods   : {
			...mapActions([type.UPD.archives,type.UPD.headertitle]),
			prevPage_m(){
				const archives = {name: 'archives'}
				const archivePage = {name: 'archivePage', params: {page: this.page_c - 1}}
				this.$router.push(this.page_c === 2 ? archives : archivePage)
			},
			nextPage_m(){
				this.$router.push({name: 'archivePage', params: {page: this.page_c + 1}})
			},
			disPrev_m(){
				return this.page_c <= 1;
			},
			disNext_m(){
				return this.page_c >= this.pagetotal_c;
			},
			getArchives_m(){
				const { page_c  } = this
				const archives = this[type.FLT.archives]
				if (archives[page_c]) {
					document.title = `【已缓存】 文章列表`
					return
				}
				const _archives = clone(archives)
				this.$load(`archives/${page_c}`).then((res) => {
					console.log(`res:`, res)
					_archives[page_c] = res
					this[type.UPD.archives](_archives)
				})
			}
		},
		filters   : {}
	}
</script>
<style scoped>

</style>

