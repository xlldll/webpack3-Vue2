/**
* Created by LinChuQiang on 2017/9/29.
*/
<template>
	<nav>
		<ul>
			<li>
				<a href = "#" class = "hover-1">
					<span class = "fa fa-user-circle"></span>
					<span>Login</span>
				</a>
			</li>
			<li>
				<router-link :to = "{name:'songLists'}" class = "hover-1">
					<span class = "fa fa-list"></span>
					<span>SongList</span>
				</router-link>
			</li>
			<li>
				<router-link :to = "{name:'comments'}" class = "hover-1">
					<span class = "fa fa-comments-o"></span>
					<span>Comments</span>
				</router-link>
			</li>
			<li>
				<input type = "search" placeholder = "search">
			</li>
		</ul>
	</nav>
</template>
<style scoped = "true" lang = "scss">
	nav {
		position: relative;
		height: 15%;
		padding: 10px;
		
		background-color: #3f3d34;
		
		text-align: center;
		
		ul {
			display: flex;
			flex-wrap: nowrap;
			flex-direction: row;
			flex-flow: nowrap row;
			justify-content: space-around;
			align-content: center;
			align-items: center;
			
			position: relative;
			width: 100%;
			height: 100%;
			margin: 0;
			padding: 0;
			
			li {
				a {
					margin: 0 10px;
					
					color: #b6423a;
					font-size: 1.5rem;
					font-weight: 900;
					
					cursor: pointer;
					
				}
				input {
					width: 10rem;
					padding: 0.8rem;
					border-radius: 0.5rem;
					
					font-size: 16px;
					font-weight: 600;
					
					outline: none;
					box-shadow: inset 1px 1px 1px #b6423a, inset 1px 1px 1px #b6423a;
					transition: width 0.3s;
					&:focus {
						width: 12rem;
					}
				}
			}
		}
		
	}
</style>
<script>
	import {mapGetters, mapActions, mapMutations} from 'vuex'
	import * as type from '../store/constant.js'
	import * as util from '../assist/utils'
	export default {
		name      : 'nav',
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
		activated(){},
		deactivated(){},
		beforeDestroy(){},
		destroyed(){},
		watch     : {},
		computed  : {},
		methods   : {},
		filters   : {}
	}
</script>

