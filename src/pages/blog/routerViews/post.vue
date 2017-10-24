/**
* Created by LinChuQiang on 2017/8/21.
*/
<template>
	<div class = "post">
		<figure class = "author" v-if = "post_c.author">
			<figcaption>{{ post_c.author.name}}</figcaption>
			<img :src = "post_c.author.avatar" :alt = "post_c.author.name">
		</figure>
		<!--在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 XSS 攻击-->
		<div class = "main content markdown-body" v-html = "post_c.content "></div>
		<ul class = "tags">
			<router-link v-for = "tag in post_c.tags" :key = "tag.id" :to = "{name:'tags',params:{id:tag.id}}" tag = "li">{{ tag.name }}</router-link>
		</ul>
	</div>
</template>
<style scoped = "true" lang = "scss">
	.post {
		position: relative;
		width: 70%;
		margin: 0 auto;
		margin-top: -100px;
	}
	
	.author {
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		
		margin-bottom: 20px;
		figcaption {
			font-size: 14px;
			line-height: 1.5;
			font-weight: 600;
		}
		img {
			width: 100px;
			height: 100px;
			margin-top: 10px;
			
			border: 1px solid beige;
			border-radius: 50%;
			box-shadow: 1px 1px #e6e6e6;
		}
	}
	
	.tags {
		li {
			float: left;
			
			margin: 0 10px;
			list-style: none;
			text-decoration: underline;
			
			&:hover {
				text-decoration: none;
				cursor: pointer;
			}
		}
	}
</style>
<script>
	import {mapGetters, mapActions} from 'vuex'
	import * as type from '../store/constant.js'
	import {clone} from '../assist/utils'
	
	export default {
		name      : 'post',
		data () {
			return {}
		},
		props     : [],
		components: {},
		
		beforeRouteEnter(to, from, next){
			console.log(`to:`, to)
			console.log(`from:`, from)
			next(vm => {
				// 通过 `vm` 访问组件实例
		  /*const post = vm[type.FLT.post]
		   const {$route: {params: {id}}} = vm
		   console.log(`post:`, post)
		   console.log(`id:`, id)
		   vm[type.UPD.headertitle](post[id].title)*/
			})
		},
		
		beforeRouteUpdate (to, from, next) {
			console.log(`to:`, to)
			console.log(`from:`, from)
			next();
		},
		beforeRouteLeave (to, from, next) {
			console.log(`to:`, to)
			console.log(`from:`, from)
			next();
		},
		beforeCreate(){},
		created(){
			this.getPost_m()
		},
		beforeMount(){},
		mounted(){},
		beforeUpdate(){},
		updated(){},
		watch   : {
			$route(newval){
				if (newval.name === "post") {
					this.getPost_m()
				}
			}
		},
		computed: {
			...mapGetters([type.FLT.post, type.FLT.config]),
			post_c(){
				const {$route: {params: {id}}} = this
				const post = this[type.FLT.post]
				return post[id] || {};
			}
		},
		methods : {
			...mapActions([type.UPD.post, type.UPD.headertitle]),
			getPost_m(){
				const {
					      $route           : {params: {id}},
					      [type.FLT.config]: {title}
				      } = this
				// console.log(`id:`, id)
				const post = this[type.FLT.post]
				if (post[id]) {
					this[type.UPD.headertitle](post[id].title)
					return document.title = `【已缓存】${post[id].title} - ${title}`;
				}
				const _post = clone(post)
				this.$load(`posts/${id}`).then((res) => {
					_post[id] = res
					document.title = `${res.title} - ${title}`
					console.log(`res:`, res)
					this[type.UPD.post](_post)
					this[type.UPD.headertitle](res.title)
				})
			}
		},
		filters : {}
	}
</script>
<style scoped>
	@import '../css/markdown.css';
	@import '../css/code-highlight.scss';
</style>

