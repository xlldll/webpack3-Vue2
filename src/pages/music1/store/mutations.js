import * as type from './constant';
export default{
	[type.CHG.init](state, data){
		state.tracks=[]
		console.log(`data:`, data)
		if(data.status !== 200){
			state.tracks[0]={
				title:'根据相关法律法规，搜索结果未予显示。(手动斜眼)'
			}
		}else{
				data.data.result.songs.forEach((obj)=>{
					// song单曲
					let s={};
					({
						name: s.name,
						id:s.id,
						pop:s.pop,
					
						al:{
							name:s.albumttl,
							picUrl:s.picurl
						}
					}=obj);
					s.artists=obj.ar;
					console.log(`s:`, s)
					state.tracks.push(s);
				})
		}
	},
};