import * as type from './constant'
import API from '../assist/api.js'

export default{
	/**
	 * 预设歌单'Main Theme'
	 * @param commit
	 * @param data
	 */
	[type.UPD.init]({commit}, data){
			API.searchSongs('Main Theme').then((data)=>{
				commit(type.CHG.init, data);
			})
	},
	/**
	 * 点击预设歌单单首歌曲的时候，正在播放歌曲在歌单中的索引
	 * @param commit
	 * @param newtrack
	 */
	[type.UPD.selectTrack]({commit,dispatch}, {newtrack}){
			  if (newtrack < 0) {
            newtrack = 0;
        }
        commit(type.CHG.selectTrack, newtrack);
			  commit(type.CHG.initPlayer);
			  dispatch(type.UPD.audioSrc)
			  
	},
	/**
	 * 获取正在播放歌曲中的地址
	 * @param state
	 * @param commit
	 * @param dispatch
	 */
	[type.UPD.audioSrc]({state,commit,dispatch}){
			let id=state.currentTrackInfo.id;
			API.audioSrc(id).then((data)=>{
				// console.log(`data:`, data)
				// console.log(`data:`, data.data.data[0].url)
				commit(type.CHG.audioSrc,data.data.data[0].url)
			})
		
	},
	/**
	 * 查找评论
	 * @param state
	 * @param commit
	 * @param dispatch
	 */
	[type.UPD.searchComments]({state,commit,dispatch}){
		let id=state.currentTrackInfo.id;
		API.searchComments(id).then((data)=>{
			commit(type.CHG.hotComments,data.data.hotComments);
			commit(type.CHG.comments,data.data.comments);
		})
	}
};