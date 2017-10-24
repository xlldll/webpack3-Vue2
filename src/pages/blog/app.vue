<template>
	<div id = "page">
		<myNav></myNav>
		<div class = "main">
			<myHeader></myHeader>
			<transition name = "slide-fade">
				<keep-alive>
					<router-view></router-view>
				</keep-alive>
			</transition>
			<myFooter></myFooter>
		</div>
	</div>
</template>
<style lang = "scss">
	/*page*/
	#page {
		position: relative;
	}
	
	.main {
		position: relative;
		padding: 30px;
		transition: padding .3s ease;
	}
	
	/*过渡的-CSS-类名*/
	
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity .3s
	}
	
	/* .fade-leave-active below version 2.1.8 */
	.fade-enter,
	.fade-leave-to {
		opacity: 0
	}
	
	.slide-fade-enter-active,
	.slide-fade-leave-active {
		transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	.slide-fade-enter,
	.slide-fade-leave-to {
		transform: translateX(10px);
		opacity: 0;
	}
	/*导航栏*/
	nav {
		position: absolute;
		
		width: 100%;
		z-index: 10;
		
		background-color: #3e3e3e;
		
		transform: translateY(-100%);
		transition: transform .3s ease;
		box-shadow: inset 0px -1px 2px 0px rgba(0, 0, 0, 0.75);
		
		&.active {
			transform: translateY(0);
			
			& + div.main {
				padding-top: 100px;
			}
		}
		
		ul {
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			flex-flow: row nowrap;
			justify-content: center;
			align-items: center;
			
			margin: 0;
			padding: 0;
			li {
				padding: 25px 10px;
				list-style: none;
				a {
					color: #e7e7e7;
					font-size: 14px;
					line-height: 1.5;
					font-weight: 600;
					text-decoration: none;
					
					-webkit-transition: color 0.2s;
					-moz-transition: color 0.2s;
					-ms-transition: color 0.2s;
					-o-transition: color 0.2s;
					transition: color 0.2s;
					
					&:hover {
						color: white;
						text-decoration: underline;
					}
				}
				
			}
		}
		
	}
 
	/*页码*/
	.pagination {
		position: relative;
		width: 50%;
		height: 60px;
		margin: 20px auto;
		
		text-align: center;
		&:before {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 3px;
			content: '';
			background: #ddd;
			
		}
		button {
			position: relative;
			float: left;
			
			margin: 0 15px 0 0;
			padding: 15px 0 0 0;
			
			z-index: 1;
			
			border: none;
			border-top: 3px solid #333;
			outline: none;
			
			background: none;
			color: #333;
			font-size: 16px;
			line-height: 1.5;
			cursor: pointer;
			
			&:hover {
				border-top-color: #00a2ed;
				color: #00a2ed;
			}
			
			transition: color 500ms;
			
			&:disabled {
				border-top-color: #888;
				color: #333;
				cursor: default;
			}
		}
		span {
			float: right;
			margin: 18px 0 0 0;
			color: #888;
			line-height: 1.5;
		}
	}
	
	/*footer*/
	footer {
		width: 90%;
		margin: 40px auto;
		padding: 60px;
		background-color: #f5f8fa;
	}
</style>
<script>
	import myNav from './components/nav.vue'
	import myHeader from './components/header.vue'
	import myFooter from './components/footer.vue'
	
	export default {
		name      : 'app',
		components: {
			myNav,
			myHeader,
			myFooter
		}
	}
</script>
