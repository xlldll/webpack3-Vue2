import * as type from './constant';
export default{
	/**
	 * 歌单
	 * @param state
	 * @returns {Array}
	 */
	[type.FLT.tracks](state){
		return state.tracks;
	},
	/**
	 * 正在播放歌曲,在歌单中的索引
	 * @param state
	 * @returns {*}
	 */
	[type.FLT.currentTrack](state){
		return state.currentTrack;
	},
	/**
	 * 正在播放的歌曲的信息
	 * @param state
	 * @returns {currentTrackInfo|{albumttl, artists, id, name, picurl, pop}|*}
	 */
	[type.FLT.currentTrackInfo](state){
		return state.currentTrackInfo;
	},
	/**
	 * 获取歌曲播放地址
	 * @param state
	 * @returns {audioSrc|string|string|*}
	 */
		[type.FLT.audioSrc](state){
		return state.audioSrc;
	},
	/**
	 * 是否正在播放
	 * @param state
	 * @returns {boolean|*|playing|{phasedRegistrationNames}}
	 */
	[type.FLT.playing](state){
		return state.playing;
	},
	/**
	 * 歌曲缓存进度（进度条）
	 * @param state
	 * @returns {boolean|*|playing|{phasedRegistrationNames}}
	 */
	[type.FLT.bufferedTime](state){
		return state.bufferedTime / state.durationTime * 100;
	},
	/**
	 * 歌曲播放进度（进度条）
	 * @param state
	 * @returns {boolean|*|playing|{phasedRegistrationNames}}
	 */
	[type.FLT.currentTime](state){
		return state.currentPos / state.durationTime * 100;
	},
		[type.FLT.currentPos](state){
		return state.currentPos;
	},
	/**
	 * 歌曲总时间长度，秒计算
	 * @param state
	 * @returns {boolean|*|playing|{phasedRegistrationNames}}
	 */
	[type.FLT.durationTime](state){
		return state.durationTime;
	},
	/**
	 * 音量
	 * @param state
	 * @returns {number|Number|*}
	 */
	[type.FLT.volume](state){
		return state.volume;
	},
	/**
	 * 热门评论
	 * @param state
	 * @returns {Array|*}
	 */
	[type.FLT.hotComments](state){
		return state.hotComments;
	},
	/**
	 * 普通评论
	 * @param state
	 */
	[type.FLT.comments](state){
		return state.comments;
	},
	[type.FLT.nolyric](state){
		return state.nolyric;
	},
		[type.FLT.lrc](state){
		return state.lrc;
	},
};