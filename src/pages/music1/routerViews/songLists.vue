/**
* Created by LinChuQiang on 2017/9/2.
*/
<template>
	<div class = "songLists">
		<ul class = "animation-style-1">
			<li class = "active">
				<img src = "http://localhost:3334/static/cloudmusic/default_cover.png" alt = "#">
				<div class = "info">
					<h3>title</h3>
					<p>subtitle</p>
				</div>
				<span>number</span>
			</li>
			<li>
				<img src = "http://localhost:3334/static/cloudmusic/default_cover.png" alt = "#">
				<div class = "info">
					<h3>titletitletitle</h3>
					<p>subtitlesubtitlesubtitle</p>
				</div>
				<span>number</span>
			</li>
			<li>
				<img src = "http://localhost:3334/static/cloudmusic/default_cover.png" alt = "#">
				<div class = "info">
					<h3>titletitletitle</h3>
					<p>subtitlesubtitlesubtitle</p>
				</div>
				<span>number</span>
			</li>
			<li>
				<img src = "http://localhost:3334/static/cloudmusic/default_cover.png" alt = "#">
				<div class = "info">
					<h3>titletitletitle</h3>
					<p>subtitlesubtitlesubtitle</p>
				</div>
				<span>number</span>
			</li>
			<li>
				<img src = "http://localhost:3334/static/cloudmusic/default_cover.png" alt = "#">
				<div class = "info">
					<h3>titletitletitle</h3>
					<p>subtitlesubtitlesubtitle</p>
				</div>
				<span>number</span>
			</li>
			<li>
				<img src = "http://localhost:3334/static/cloudmusic/default_cover.png" alt = "#">
				<div class = "info">
					<h3>titletitletitle</h3>
					<p>subtitlesubtitlesubtitle</p>
				</div>
				<span>number</span>
			</li>
		</ul>
	</div>
</template>

<style scoped = "true" lang = "scss">
	.songLists {
		height: 85%;
		margin: 0;
		padding: 0;
		ul {
			height: 100%;
			overflow-x: hidden;
			overflow-y: scroll;
			margin: 0;
			padding: 0;
			
			li {
				display: flex;
				flex-flow: row nowrap;
				justify-content: flex-start;
				align-content: center;
				align-items: center;
				
				margin: 0;
				padding: 2.5% 0;
				border-bottom: 1px solid #3f3d34;
				
				color: white;
				background: #4a473c;
				font-size: 1.5rem;
				font-weight: 400;
				
				cursor: pointer;
				
				&:nth-child(odd) {
					background: linear-gradient(45deg, #4a473c, #2e2a1c 50%, #2c2712); /*new gradient for Webkit*/
				}
				&:nth-child(even) {
					background: linear-gradient(-45deg, #4a473c, #2e2a1c 50%, #2c2712); /*new gradient for Webkit*/
				}
				&.active {
					color: #f9934e;
					
				}
				img {
					width: 10%;
					height: 10%;
					border-radius: 50%;
					margin: 0 5%;
				}
				.info {
					order: 0;
					flex-flow: 0;
					flex-shrink: 0;
					flex-basis: 68%;
					align-self: auto;
				}
				
				span {
					align-self: center;
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
		name      : 'songLists',
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

