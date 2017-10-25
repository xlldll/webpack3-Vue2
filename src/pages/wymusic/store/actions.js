import * as type from './constant';
import Axios from 'axios'
export default{
	[type.UPD.audioUrl]({commit, state}, data){
		commit(type.CHG.loading, true);
		Axios.get(`https://api.imjad.cn/cloudmusic?type=url&id=${data}`).then(res => {
			// 统一数据模型，方便后台接口的改变
			var url = res.data.data[0].url;
			commit(type.CHG.setAudio);
			commit(type.CHG.setLocation, url);
			commit(type.CHG.loading, false);
		}).catch((error) => { // 错误处理
			commit(type.CHG.loading, false);
			console.log(error);
			window.alert('获取歌曲信息出错！');
		});
	},
	[type.UPD.loading]({commit}, data){
		commit(type.CHG.loading, data);
	},
};
