<template>
	<div id = "search">
		<!--搜索模块-->
		<div class = "search">
			<!--搜索框-->
			<div class = "search-input">
				<img src = "./../assets/search/icon-search.png" alt = "搜索">
				<form>
					<input type = "text" placeholder = "搜索 歌曲/专辑/歌手" v-model = "key" @foucs = "focus()">
				</form>
			</div>
			<!--默认不显示取消按钮-->
			<div class = "search-cancel" @click = "searchCancel()" @touchend = "searchCancel()">
				取消
			</div>
		</div>
		
		<!--默认不显示搜索历史列表；在没有搜索结果时，才显示搜索历史列表以及热门搜索列表-->
		<div class = "hotkey">
			<!--搜索历史列表-->
			<div class = "search-history">
				<div class = "search-history-item">
					搜索历史列表
				</div>
			</div>
			<!--热门搜索列表-->
			<ul>
				<li @click = "search">
					<span class = "hotkey-index">1</span>
					<span class = "hotkey-k">name</span>
					<span class = "hotkey-n">name</span>
				</li>
			</ul>
		</div>
		
		<!--默认不显示搜索结果-->
		<div class = "result">
			<!--单曲-->
			<div class = "result-group">
				<!--标题-->
				<div class = "group">
					<img class = "group-img" src = "./../assets/search/icon-music.png">
					<p class = "group-p">单曲</p>
				</div>
				<!--结果-->
				<div class = "result-item">
					<p class = "result-title" @click = "play">title</p>
					<p class = "result-author" @click = "play">singer</p>
					<p class = "action-button">
						<img src = "./../assets/search/icon-...black.png">
					</p>
				</div>
			</div>
			<!--专辑-->
			<div class = "result-group">
				<!--标题-->
				<div class = "group">
					<img class = "group-img" src = "./../assets/search/icon-album.png">
					<p class = "group-p">专辑</p>
				</div>
				<!--结果-->
				<div class = "album-item" @click = "showAlbum">
					<img class = "album-img">
					<div class = "album-info">
						<p class = "album-name">name</p>
						<p class = "album-author">singer</p>
					</div>
				</div>
			</div>
			<!--歌手-->
			<div class = "result-group">
				<div class = "group">
					<img class = "group-img" src = "./../assets/search/icon-singer.png">
					<p class = "group-p">歌手</p>
				</div>
				<div class = "singer-item" @click = "showSinger">
					<img class = "singer-img">
					<div class = "singer-p">
						<p>name</p>
					</div>
				</div>
			</div>
			<!--MV-->
			<div class = "result-group">
				<div class = "group">
					<img class = "group-img" src = "./../assets/search/icon-mv.png">
					<p class = "group-p">MV</p>
				</div>
				<div class = "mv-item" @click = "openmv">
					<p class = "mv-name">name</p>
					<p class = "mv-author">singer</p>
				</div>
			</div>
		
		</div>
	
	</div>
</template>
<script>
	export default{
		name      : 'Search',
		data(){
			return {
				key: ''
			};
		},
		components: {},
		methods   : {
			focus(){},
			searchCancel(){},
			search(){},
			play(){},
			showAlbum(){},
			showSinger(){},
			openmv(){}
		}
	}
</script>
<style lang = "scss" scoped>
	/*搜索模块*/
	.search {
		display: flex;
		flex-direction: row;
		position: fixed;
		top: 0;
		z-index: 1;
		
		width: 100%;
		height: 60px;
		
		background: #ecf;
	}
	
	/*搜索框*/
	.search-input {
		display: flex;
		flex-direction: row;
		align-items: center;
		
		width: 100%;
		margin: 10px;
		border-radius: 5px;
		
		background: #ec971f;
		
		img {
			display: inline-block;
			
			width: 30px;
			height: 30px;
			
			margin: 0 5px;
		}
		
		& form, & input {
			flex-grow: 1;
			
			width: 100%;
			height: 100%;
			border: none;
			outline: none;
			
			font-size: medium;
			background: #eee;
		}
	}
	
	.search-cancel {
		
		width: 55px;
		height: 40px;
		margin: 10px auto;
		overflow: hidden;
		
		line-height: 40px;
		
		transition: width 0.3s;
		cursor: pointer;
	}
	
	.search-cancel-show {
		width: 55px;
	}
	
	.hotkey {
		display: flex;
		flex-direction: column;
		
		margin-top: 60px;
		margin-bottom: 50px;
		background: green;
		
		/*搜索历史列表*/
		.search-history {
			display: flex;
			flex-wrap: wrap;
			max-height: 66px;
			padding: 0 10px;
			background: #2e6da4;
			.search-history-item {
				margin: 5px;
				padding: 0 3px;
				border: 1px solid #000;
				border-radius: 14px;
				cursor: pointer;
			}
		}
		/*热门搜索列表*/
		ul {
			list-style: none;
			background: red;
			li {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				height: 40px;
				padding: 0 10px;
				cursor: pointer;
				.hotkey-index {
					padding-right: 10px;
				}
				.hotkey-k {
					flex-grow: 1;
				}
			}
		}
	}
	
	/*搜索结果*/
	.result {
		display: flex;
		flex-direction: column;
		
		margin-top: 60px;
		margin-bottom: 50px;
		background: yellow;
	}
	
	.result-group {
		background: orangered;
	}
	
	/*标题*/
	.group-img {
		width: 25px;
		height: 25px;
	}
	
	.group {
		display: flex;
		flex-direction: row;
		align-items:center;
		
		height: 40px;
		padding-bottom: 5px;
		padding-left: 10px;
		background: silver;
	}
	
	.group-p {
		margin-left: 10px;
	}
	
	/*单曲搜索结果*/
	.result-item {
		display: flex;
		flex-direction: row;
		align-items: center;
		
		height: 40px;
		border-bottom: 1px #eee solid;
		margin-left: 10px;
		padding-left: 10px;
		
		background: #ffffff;
		cursor: pointer;
		
		.result-title {
			margin-right: 10px;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
		.result-author {
			flex-grow: 1;
			overflow: hidden;
			
			color: #929292;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
	}
	
	.action-button {
		width: 20px;
		height: 20px;
		padding: 10px;
		img {
			width: 20px;
		}
	}
	
	/*专辑结果*/
	.album-item {
		
		display: flex;
		flex-direction: row;
		align-items: center;
		
		height: 40px;
		border-bottom: #eeeeee 1px solid;
		padding: 10px 10px;
		
		cursor: pointer;
		.album-img {
			height: 40px;
			width: 40px;
			border-radius: 5px;
		}
		
		.album-info {
			display: flex;
			flex-direction: column;
			padding-left: 15px;
			.album-name {
				font-size: 14px;
				line-height: 20px;
			}
			.album-author {
				font-size: 12px;
				color: #929292;
				line-height: 20px;
			}
		}
	}
	
	.songs-action-button {
		height: 20px;
		width: 20px;
		margin-right: 10px;
	}
	
	/*歌手搜索结果*/
	.singer-item {
		
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 40px;
		padding: 5px 10px;
		
		cursor: pointer;
		.singer-img {
			height: 40px;
			width: 40px;
			border-radius: 50%;
		}
		
		.singer-p {
			flex-grow: 1;
			display: flex;
			align-items: center;
			height: 40px;
			padding: 3px 10px;
			border-bottom: 1px #eeeeee solid;
			
		}
		
	}
	
	/*MV搜索结果*/
	.mv-item {
		display: flex;
		flex-direction: column;
		
		padding: 10px;
		border-bottom: #eeeeee 1px solid;
		
		cursor: pointer;
		.mv-name {
			font-size: 14px;
			line-height: 20px;
		}
		
		.mv-author {
			font-size: 12px;
			color: #929292;
			line-height: 20px;
		}
	}

</style>