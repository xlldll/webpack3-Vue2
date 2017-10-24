import * as type from './constant';
export default{
	[type.UPD.config]({commit}, data){
		commit(type.CHG.config, data);
	},
};