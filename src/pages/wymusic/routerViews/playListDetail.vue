/**
* Created by LinChuQiang on 2017/9/11.
*/

<template>
	<div>
		<mu-flexbox>
			<mu-flexbox-item>
				<mu-breadcrumb style = "font-size:18px;padding: 20px">
					<mu-breadcrumb-item href = "http://localhost:3334/pages/wymusic/app.html#/Startup">Home</mu-breadcrumb-item>
					<mu-breadcrumb-item>{{title}}</mu-breadcrumb-item>
				</mu-breadcrumb>
			</mu-flexbox-item>
		</mu-flexbox>
		<mu-flexbox class = "info">
			<mu-flexbox-item class = "info-gallery" grow = "0" shrink = "0" basis = "190px">
				<span>{{playCount}}</span>
				<img :src = "coverImgUrl+'?param=150y150'" :alt = "title">
			</mu-flexbox-item>
			<mu-flexbox-item class = "info-title">
				<p class = "title">{{desc}}</p>
				<mu-chip>
					<mu-avatar :size = "50" :src = "creator.avatarUrl + '?param=50y50'" />
					{{creator.nickname}}
				</mu-chip>
				<mu-chip backgroundColor = "blue300" @click = "playAll_m">
					<mu-avatar :size = "50" :src = "creator.avatarUrl + '?param=50y50'" />
					播放全部
				</mu-chip>
			</mu-flexbox-item>
		</mu-flexbox>
		<mu-flexbox>
			<mu-flexbox-item>
				<!--旋转加载条-->
				<mu-circular-progress :size = "40" class = "center" v-if = "isloading" />
				<mu-list v-show = "!isloading">
					<div v-for = "(item,index) in songLists" @click = "playAudio_m(item)">
						<mu-list-item :title = "item.name" :value = "item.id" :describeText = "item.ar[0].name">
							<span slot = "left">{{index + 1}}</span>
						</mu-list-item>
						<mu-divider />
					</div>
				</mu-list>
			</mu-flexbox-item>
		
		</mu-flexbox>
	</div>
</template>
<style scoped = "true" lang = "scss">
	.info {
		background-color: rgba(77, 77, 77, .1);
		.info-gallery {
			position: relative;
			padding: 0 20px;
			height: 150px;
			span {
				position: absolute;
				top: 0;
				left: 20px;
				display: block;
				width: 150px;
				
				background-color: rgba(0, 0, 0, .35);
				color: whitesmoke;
				font-size: 14px;
				line-height: 1.5;
				text-align: right;
			}
		}
		.info-title {
			.title {
				margin: 10px;
				
				color: burlywood;
				font-size: 24px;
				line-height: 1.5;
			}
			.mu-chip {
				border-radius: 24px;
			}
		}
	}
	
	.center {
		display: block !important;
		margin: 10% auto 0;
	}
</style>
<script>
	import {mapGetters, mapActions, mapMutations} from 'vuex'
	import * as type from '../store/constant.js'
	import * as util from '../assist/utils'
	
	export default {
		name      : 'playListDetail',
		data () {
			return {
				coverImgUrl: 'http://p1.music.126.net/KUi4PGXhsFGLE6asHk9iyg==/109951163020582434.jpg',
				title      : '歌单标题',
				desc       : '歌单描述',
				playCount  : 0,
				creator    : {
					'avatarUrl': 'http://p1.music.126.net/KUi4PGXhsFGLE6asHk9iyg==/109951163020582434.jpg',
					'nickname' : '创作者'
				},
				coverid    : 0,
				songLists  : [
					{
						name: '歌曲名称',
						id  : 0,
						ar  : [
							{
								name: '歌曲简介'
							}
						]
					}
				],
				isloading  : false
			}
		},
		props     : [],
		components: {},
		beforeRouteEnter(to, from, next){
			// console.log(`to:`, to)
			// console.log(`from:`, from)
			next(vm => {
				let id = parseInt(to.params.coverid)
				if (id && id !== parseInt(vm.coverid)) {
					// console.log(`加载中:`,)
					vm.getsongLists_m();
				}
				if (to.params.coverImg) {
					vm.coverImgUrl = to.params.coverImg
					vm.title = vm.$route.params.name
					vm.desc = vm.$route.params.desc
					vm.playCount = vm.$route.params.count
					vm.creator = vm.$route.params.creator
					vm.coverid = vm.$route.params.coverid
				}
			})
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
		computed  : {
			...mapGetters([
				type.FLT.showMiniAudio,
				type.FLT.playing
			])
		},
		methods   : {
			...mapMutations([type.CHG.play, type.CHG.pause, type.CHG.addToList, type.CHG.showMiniAudio, type.CHG.setAudioIndex]),
			...mapActions([type.UPD.audioUrl]),
			getsongLists_m(){
				this.isloading = true;
				this.$load(null, `?type=playlist&id=${this.$route.params.coverid}`).then(res => {
					this.songLists = res.playlist.tracks;
					this.isloading = false;
				}).catch(error => {
					console.log('加载歌单信息出错:' + error)
				});
			},
			playAudio_m(item){
				document.getElementById('audioPlay').pause()
				// this.$store.commit('pause')
				this[type.CHG.pause]()
				let audio = {}
				audio.id = item.id
				audio.singer = item.ar[0].name
				audio.albumPic = item.al.picUrl
				audio.name = item.name
				this[type.CHG.addToList](audio)
				this[type.UPD.audioUrl](audio.id)
				if (this[type.FLT.showMiniAudio]) {
					this[type.CHG.showMiniAudio]()
				}
				
			},
			playAll_m(){
				let items = []
				// console.log(`thisdognlsit:`, this.songLists)
				this.songLists.forEach((item) => {
					items.push({
						id      : item.id,
						singer  : item.ar[0].name,
					  	albumPic: item.al.picUrl,
						name    : item.name
					})
				})
				this[type.CHG.addToList](items)
				if (!this[type.FLT.playing]) {
					this[type.CHG.setAudioIndex](0);
					this[type.UPD.audioUrl](items[0].id)
				}
				
	
			}
		},
		filters   : {}
	}
</script>

