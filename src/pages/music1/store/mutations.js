import * as type from './constant';
export default{
	/**
	 * 预设歌单，搜索的歌曲列表，渲染到songList
	 * @param state
	 * @param data
	 */
			[type.CHG.init](state, data){
		state.tracks = [];
		if (data.status !== 200) {
			state.tracks[0] = {
				title: '根据相关法律法规，搜索结果未予显示。(手动斜眼)',
			};
		} else {
			data.data.result.songs.forEach((obj) => {
				// song单曲
				let s = {};
				({
					name: s.name,
					al  : {
						name  : s.albumttl,
						picUrl: s.picurl,
					},
					id  : s.id,
					pop : s.pop,
				} = obj);
				s.artists = obj.ar;
				state.tracks.push(s);
			});
		}
	},
	/**
	 * 点击预设歌单单首歌曲的时候，正在播放歌曲在歌单中的索引
	 * @param state
	 * @param newtrack 0
	 */
			[type.CHG.selectTrack](state, newtrack){
		state.currentTrack = newtrack;
	},
	/**
	 * 点击预设歌单单首歌曲的时候，初始化播放器
	 * @param state
	 * @param data
	 */
			[type.CHG.initPlayer](state, data){
		state.currentTrackInfo = state.tracks[state.currentTrack];
	},
	/**
	 * 设置歌曲的SRC地址
	 * @param state
	 * @param data
	 */
			[type.CHG.audioSrc](state, data){
		state.audioSrc = data;
	},
	/**
	 * 设置是否正在播放
	 * @param state
	 * @param data
	 */
			[type.CHG.playing](state, data){
		state.playing = data;
	},
	/**
	 * 歌曲缓存进度（进度条）
	 * @param state
	 * @param data
	 */
			[type.CHG.bufferedTime](state, data){
		state.bufferedTime = data;
	},
	/**
	 * 歌曲播放进度（进度条）
	 * @param state
	 * @param data
	 */
			[type.CHG.currentPos](state, data){
		state.currentPos = data;
	},
	/**
	 * 歌曲总时间长度，秒计算
	 * @param state
	 * @param data
	 */
			[type.CHG.durationTime](state, data){
		state.durationTime = data;
	},
	/**
	 * 音量
	 * @param state
	 * @param data
	 */
			[type.CHG.volume](state, data){
		state.volume = data;
	},
	[type.CHG.hotComments](state, data){
		// console.log(`data:`, data);
		// console.log(`user:`, data[0].user);
		state.hotComments = [];
		data.forEach((item, index) => {
			// console.log(`item:`, item.user.nickname);
			let obj = {};
			({
				user      : {
					nickname : obj.nickname,
					avatarUrl: obj.avatarUrl
				},
				likedCount: obj.likedCount,
				time      : obj.time,
				content   : obj.content
			} = item);
			obj.beReplied = data.beReplied;
			state.hotComments.push(obj);
		});
		
	},
	[type.CHG.comments](state, data){
		state.comments = [];
		data.forEach((item, index) => {
			let obj = {};
			({
				user      : {
					nickname : obj.nickname,
					avatarUrl: obj.avatarUrl
				},
				likedCount: obj.likedCount,
				time      : obj.time,
				content   : obj.content
			} = item);
			obj.beReplied = data.beReplied;
			state.comments.push(obj);
		});
	}
};