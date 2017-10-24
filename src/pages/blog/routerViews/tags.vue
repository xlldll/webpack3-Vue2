/**
* Created by LinChuQiang on 2017/8/21.
*/
<template>
	<div class = "tags">
		<div class = "cover">
			<router-link v-for = "tag in tags_c" :key = "tag.id" :to = "{name:'tagId',params:{id:tag.id}}" :style = "`background-image: url('https://unsplash.it/270/374/?gravity=east&random=${tag.id}');`">
				<h4>{{ tag.name }}</h4>
				<p>{{ tag.count }} Posts</p>
			</router-link>
		</div>
	</div>
</template>
<style scoped = "true" lang = "scss">
	.tags {
		position: relative;
		
		.cover {
			display: flex;
			flex-flow: row wrap;
			justify-content: space-around;
			align-items: center;
			width: 70%;
			margin: 0 auto;
			a {
				display: inline-block;
				position: relative;
				width: 270px;
				height: 374px;
				margin: 15px 0;
				
				background-color: #f7f7f7;
				color: black;
				text-decoration: none;
				box-shadow: 1px 5px 5px 0 rgba(0, 0, 0, .27);
				h4 {
					position: absolute;
					bottom: 25px;
					left: 20px;
					color: white;
				}
				p {
					position: absolute;
					bottom: 5px;
					left: 20px;
					color: white;
				}
				&:before {
					position: absolute;
					top: 0;
					left: 0;
					content: "";
					width: 100%;
					height: 100%;
					background-color: rgba(0, 0, 0, .27);
				}
				&:after {
					position: absolute;
					top: 5%;
					left: 5%;
					content: "";
					width: 90%;
					height: 90%;
					border: 1px solid rgba(255, 255, 255, .6);
					transition: all 500ms;
				}
				&:hover {
					h4, p {
						display: none;
					}
					
					&:after {
						transform: scale(0);
					}
				}
			}
		}
		
	}

</style>
<script>
	import {mapGetters,mapActions} from 'vuex'
	import * as type from '../store/constant'
	export default {
		name      : 'tags',
		data () {
			return {}
		},
		props     : {},
		components: {},
		beforeRouteEnter(to,from,next){
			next(vm=>{
				const ttl=`文章标签 - Tags`
				document.title=ttl
			    vm[type.UPD.headertitle](ttl)
			})
			
		},
		mounted(){},
		watch     : {},
		computed  : {
			...mapGetters([type.FLT.config]),
			tags_c(){
				const {[type.FLT.config]: {tags}} = this
				return tags;
			},
		},
		methods   : {
			...mapActions([type.UPD.headertitle])
		},
		filters   : {}
	}
</script>
<style scoped>

</style>

