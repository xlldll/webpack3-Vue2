import * as type from './constant';
import Axios from 'axios';
export default{
	[type.UPD.loading]({commit}, data){
		commit(type.CHG.loading, data);
	}
};