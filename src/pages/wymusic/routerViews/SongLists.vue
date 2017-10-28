/**
* Created by LinChuQiang on 2017/9/25.
*/
<template>
	<!--所有推荐歌单-面板2-->
	<div class = "mainbody">
		<mu-card>
			<mu-card-header title = "所有推荐歌单" subTitle = "2017-09-09">
				<mu-avatar src = "http://localhost:3334/static/cloudmusic/aef.png" slot = "avatar" />
			</mu-card-header>
			
			<mu-grid-list :padding = "20" :cols = "3" :cellHeight = "190">
				<mu-grid-tile v-for = "item in topPlayList" :key = "item.id">
					<router-link :to = "{name:'playListDetail',params:{coverid:item.id,name:item.name,coverImg:item.coverImgUrl,creator:item.creator,count:item.playCount,desc:item.description}}">
						<img :src = "item.coverImgUrl + '?param=300y300' " :alt = "item.name">
					</router-link>
					<span slot = "title">{{item.name}}</span>
					<span slot = "subTitle">by <b>{{item.creator.nickname}}</b></span>
				</mu-grid-tile>
			
			</mu-grid-list>
		</mu-card>
		<mu-infinite-scroll :scroller = "scroller" :loading = "isloading" @load = "loadMore" />
	</div>
</template>
<style scoped = "true" lang = "scss">
	.mainbody {
		margin: 50px 50px 100px;
		.mu-card {
			margin: 20px 0;
			overflow: hidden;
		}
	}
</style>
<script>
	import {mapGetters, mapActions, mapMutations} from 'vuex'
	import * as type from '../store/constant.js'
	import * as util from '../assist/utils'
	export default {
		name      : 'SongLists',
		data () {
			
			return {
				scroller   : null,
				isloading  : false,
				topPlayList: [],
				offset     : 0
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
			
			this.getSongLists_m();
			
		},
		beforeMount(){},
		mounted(){
			this.scroller = this.$el
		},
		beforeUpdate(){},
		updated(){},
		activated(){},
		deactivated(){},
		beforeDestroy(){},
		destroyed(){},
		watch     : {},
		computed  : {},
		methods   : {
			
			getSongLists_m(){
				this.isloading = true;
				this.$load(`http://musicapi.duapp.com/api.php`, `?type=topPlayList&cat=全部&offset=${this.offset}&limit=12`).then((res) => {
					// console.log(`res:`, res)
					let total = res.total
					let list = res.playlists
					for (let i = 0; i < list.length; i++) {
						this.topPlayList.push(list[i])
					}
					this.offset = this.offset + 12
					if (this.offset > total) this.offset = total
					this.isloading = false;
				})
			},
			
			loadMore () {
				this.getSongLists_m()
			}
			
		},
		filters   : {}
	}
</script>

