const getters = [
	'tracks',
	'currentTrack',
	'currentTrackInfo',
	'audioSrc',
	'playing',
	'bufferedTime',
	'currentTime',
	'currentPos',
	'durationTime',
	'volume',
	'hotComments',
	'comments',
			'nolyric',
	'lrc',
];

const mutations = [
	'init',
	'selectTrack',
	'initPlayer',
	'audioSrc',
	'playing',
	'bufferedTime',
	'currentPos',
	'durationTime',
	'volume',
	'hotComments',
	'comments',
	'nolyric',
	'lrc',
	
];

const actions = [
	'init',
	'selectTrack',
	'audioSrc',
	'searchComments',
	'searchLrc',
];

function constObj(type, state) {
	let o = {};
	// todo-JS:state.values ES6语法无效 只能换map
	// console.log(`state:`, state.values())
	state.map(val => {o[val] = type + val;});
	// console.log(`constantJs:`, o)
	return o;
}

export const FLT = constObj('FLT', getters);
export const CHG = constObj('CHG', mutations);
export const UPD = constObj('UPD', actions);

