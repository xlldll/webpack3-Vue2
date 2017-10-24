// todo：可以进一步优化整合
const getters = [
	'songList',
	'showMiniAudio',
	'audio',
	'loading',
	'playing',
	'prBufferedTime',
	'prCurrentTime',
	'dragSong',
	'dragSongTime',
];
const mutations = [
	'loading',
	'showMiniAudio',
	'dragSong',
	
	'play',
	'pause',
	'playnext',
	'setCurrentTime',
	'setDurationTime',
	'setBufferedTime',
	
	'play',
	'play',

];
const actions = [
	'loading',
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

