import axios from 'axios'
import ADDR from './addr.js'

let baseUrl='https://api.imjad.cn/cloudmusic/'

const request=axios.create({
	baseURL:baseUrl
})

export default {
	searchSongs:(param)=>{
		return request.get(ADDR.searchSongs,{
			params:{
				s:param
			}
		})
	},
	audioSrc:(id)=>{
		return request.get(ADDR.audioSrc,{
			params:{
				id:id
			}
		});
	}
}