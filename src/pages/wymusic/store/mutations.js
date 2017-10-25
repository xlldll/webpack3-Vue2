import * as type from './constant';
export default{
	[type.CHG.loading](state, data){
		state.loading = data;
	},
	[type.CHG.showMiniAudio](state){
		state.showMiniAudio = !state.showMiniAudio;
	},
	[type.CHG.dragSong](state, data){
		state.dragSong = data;
	},
	
	[type.CHG.play](state, data){
		state.playing = true;
	},
	[type.CHG.pause](state, data){
		state.playing = false;
	},
	[type.CHG.playprev](state, data){
		state.currentIndex--;
		if (state.currentIndex < 1) {
			state.currentIndex = state.songList.length;
		}
		state.audio = state.songList[state.currentIndex - 1];
	},
	[type.CHG.playnext](state, data){
		state.currentIndex++;
		if (state.currentIndex > state.songList.length) {
			state.currentIndex = 1;
		}
		state.audio = state.songList[state.currentIndex - 1];
	},
	
	[type.CHG.setCurrentTime](state, data){
		state.currentTime = data;
	},
	[type.CHG.setDurationTime](state, data){
		state.durationTime = data;
	},
	[type.CHG.setBufferedTime](state, data){
		state.prBufferedTime = data;
	},
	
	[type.CHG.setAudioIndex](state, data){
		state.audio = state.songList[data];
		state.currentIndex = data + 1;
	},
	
	[type.CHG.unsetAudioIndex](state, data){
		state.songList.splice(data, 1);
		if (data === state.songList.length) {
			data--;
		}
		state.audio = state.songList[data];
		state.currentIndex = data + 1;
		if (state.songList.length === 0) {
			state.audio = {
				'id'      : 0,
				'name'    : '歌曲名称',
				'singer'  : '演唱者',
				'albumPic': '/static/player-bar.png',
				'location': '',
				'album'   : '',
			};
			state.playing = false;
		}
	},
	[type.CHG.pause](state, data){
		state.playing = false;
	},
	
	[type.CHG.setAudio](state, data){
		state.audio = state.songList[state.currentIndex - 1];
	},
	
	[type.CHG.setLocation](state, data){
		state.audio.location = data;
	},
	
	[type.CHG.addToList](state, data){
		var items = Array.prototype.concat.call(data);
		// console.log(items)
		/*
		 * [
		 *  {id,name.location,...}
		 * ]
		 * */
		items.forEach(item => {
			var flag = false;
			// 检测歌曲重复
			state.songList.forEach(function(element, index) {
				if (element.id === item.id) {
					flag = true;
					// 并播放
					state.currentIndex = index + 1;
				}
			});
			if (!flag) {
				state.songList.push(item);
				// 并播放
				state.currentIndex = state.songList.length;
			}
		});
	},
};