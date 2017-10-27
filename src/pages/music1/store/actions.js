import * as type from './constant'
import API from '../assist/api.js'

export default{
	[type.UPD.init]({commit}, data){
			API.searchSongs('Main Theme').then((data)=>{
				commit(type.CHG.init, data);
			})
	},
};