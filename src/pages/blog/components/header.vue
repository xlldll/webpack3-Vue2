/**
* Created by LinChuQiang on 2017/8/21.
*/
<template>
	<header>
		<div class = "outerbox" @click = "toggleMenu_m">
			<div class = "innerbox" :class="loading_c"></div>
		</div>
		<div class = "home">
			<div class = "icon" @click = "backtohome_m"></div>
		</div>
		<p>{{ FLTconfig.description }}</p>
		<h1>{{ FLTheadertitle }}</h1>
	</header>
</template>
<script>
	import {mapGetters, mapActions} from 'vuex'
	import * as type from '../store/constant.js'
	export default {
		name      : 'header',
		data () {
			return {}
		},
		props     : {},
		components: {},
		beforeRouteEnter(to, from, next){
			console.log(`header-to:`, to)
			console.log(`header-from:`, from)
			next()
		},
		beforeRouteUpdate (to, from, next) {
			console.log(`header—to:`, to)
			console.log(`header-from:`, from)
			next()
		},
		beforeRouteLeave (to, from, next) {
			console.log(`header-to:`, to)
			console.log(`header-from:`, from)
			next()
		},
		created(){
			this[type.UPD.headertitle]("NodeJs博客列表")
		},
		mounted(){},
		beforeUpdate(){ },
		updated(){ },
		watch     : {},
		computed  : {
			//1. 获得初始数据-config
			...mapGetters([type.FLT.config, type.FLT.headertitle, type.FLT.menuToggle,type.FLT.loading]),
		  loading_c(){
				if(this[type.FLT.loading]){
					return 'loading';
				}else{
					return 'naving';
				}
		  }
		},
		methods   : {
			...mapActions([type.UPD.headertitle, type.UPD.menuToggle]),
			backtohome_m(){
				this.$router.push({
					name: 'home'
				});
			},
			toggleMenu_m(){
				const flag = this[type.FLT.menuToggle]
				this[type.UPD.menuToggle](!flag)
			}
		},
		filters   : {}
	}
</script>
<style scoped lang = "scss">
	
	header {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		
		width: 90%;
		margin: 0 auto 20px;
		padding: 60px;
		background-color: #f5f8fa;
		.outerbox {
			position: absolute;
			top: 20px;
			left: 40px;
			display: flex;
			flex-flow: column nowrap;
			justify-content: center;
			align-items: center;
			
			width: 50px;
			height: 41px;
			
			background-color: black;
			.innerbox {
				position: relative;
				
				width: 50%;
				height: 18px;
				content: "";
				margin: 0;
				padding: 0;
				
				border-radius: 50%;
				border: 2px solid white;
				border-left-color: transparent;
				border-right-color: transparent;
				
				color: white;
				
				&.loading {
					-webkit-animation: circle 1s infinite;
					-o-animation: circle 1s infinite;
					animation: circle 1s infinite;
				}
				
				&.naving {
					border-radius: 0;
					border-left: none;
					border-right: none;
					&:before {
						position: absolute;
						top: 8px;
						left: 0;
						width: 100%;
						height: 2px;
						content: "";
						background-color: white;
						color: white;
					}
				}
			}
		}
		.home {
			position: absolute;
			top: 20px;
			left: 100px;
			
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			flex-flow: row nowrap;
			justify-content: center;
			align-items: flex-end;
			
			width: 50px;
			height: 31px;
			padding-top: 5px;
			padding-bottom: 5px;
			
			background-color: black;
			
			.icon {
				position: relative;
				
				width: 30%;
				height: 18px;
				content: "";
				margin: 0;
				padding: 0;
				border: 2px solid white;
				color: white;
				
				&:before {
					position: absolute;
					top: -38px;
					left: -10px;
					width: 1px;
					height: 10px;
					content: "";
					border: 17px solid white;
					border-top-color: transparent;
					border-left-color: transparent;
					border-right-color: transparent;
					
					color: white;
				}
				
				&:hover {
					border-color: yellow;
					background-color: yellow;
					
					&:before {
						border-bottom-color: orange;
						
					}
				}
				
			}
		}
		
		p {
			color: #a8a8a8;
		}
		h1 {
			margin-top: 0;
			
			font-weight: 500;
		}
	}
	
	@keyframes circle {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
	
	@-webkit-keyframes circle {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

</style>

