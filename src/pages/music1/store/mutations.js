import * as type from './constant';
export default{
	[type.CHG.config](state, data){
		state.config = data;
	},
};