import * as type from './constant';
export default{
	[type.FLT.songList](state){
		return state.songList;
	},
	[type.FLT.showMiniAudio](state){
		return state.showMiniAudio;
	},
	[type.FLT.audio](state){
		return state.audio;
	},
	[type.FLT.loading](state){
		return state.loading;
	},
	[type.FLT.playing](state){
		return state.playing;
	},
	[type.FLT.prBufferedTime](state){
		return state.prBufferedTime;
	},
	[type.FLT.prCurrentTime](state){
		return state.prCurrentTime;
	},
	[type.FLT.dragSong](state){
		return state.dragSong;
	},
	[type.FLT.dragSongTime](state){
		return state.dragSongTime;
	},
};