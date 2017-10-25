/**
* Created by LinChuQiang on 2017/9/22.
*/
<template>
	<div>
		<mu-bottom-sheet :open = "bottomSheet" @close = "closeBottomSheet_m">
			<!--todo-vue-vuex:这里读取不到mapGetters的songList，令我放弃type-->
			<div class = "title">播放列表（{{ FLTsongList.length }}）</div>
			<mu-divider />
			<div class = "list-wrapper">
				<div class = "list-item" v-for = "(item,index) in songList_c" :class = "{playing:item.id == FLTaudio.id}">
					<div class = "left" @click = "play_m(index)">
						<span class = "list-name">{{ item.name }}</span>
						<span class = "list-singer"> - {{ item.singer }}&nbsp;</span>
					</div>
					<span class = "list-btn" @click = "remove_m(index)">X</span>
					<mu-divider />
				</div>
			</div>
		</mu-bottom-sheet>
	</div>
</template>
<style scoped = "true" lang = "scss">
	.title {
		height: 2rem;
		
		font-size: 16px;
		line-height: 2rem;
		color: rgba(0, 0, 0, .87);
		text-align: center;
	}
	
	.list-wrapper {
		width: 100%;
		height: 50vh;
		padding: 0 10px;
		overflow: auto;
		
		.lite-item {
			height: 5rem;
			.left {
				float: left;
				
				max-width: 90%;
				height: 5rem;
				overflow: hidden;
				
				.list-name {
					float: left;
					max-width: 72%;
					height: 2rem;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.list-singer {
					color: #737171;
					font-size: 12px;
				}
			}
		}
		
		.playing {
			color: red;
			.list-singer {
				color: #0d519c;
			}
		}
		
		.list-btn {
			float: right;
			width: 32px;
			text-align: center;
			color: #737171;
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
			return {
				bottomSheet: false
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
			...mapGetters([type.FLT.songList, type.FLT.audio]),
			songList_c(){
				return this[type.FLT.songList];
			}
		},
		methods   : {
			...mapMutations([type.CHG.setAudioIndex, type.CHG.unsetAudioIndex, type.CHG.pause]),
			...mapActions([type.UPD.audioUrl]),
			closeBottomSheet_m(){
				this.bottomSheet = false
			},
			openBottomSheet_m () {
				this.bottomSheet = true
			},
			play_m(index){
				this[type.CHG.setAudioIndex](index);
				this[type.UPD.audioUrl](this[type.FLT.audio].id);
			},
			remove_m(index){
				this[type.CHG.unsetAudioIndex](index);
			},
		},
		filters   : {}
		
	}
</script>

