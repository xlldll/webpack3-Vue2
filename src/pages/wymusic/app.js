import Vue from 'vue';
import VueRouter from 'vue-router';
import MuseUI from 'muse-ui';

import routes from './router';
import store from './store/index';
import plugin from './plugin/index';


import '@/static/css/normalize.css';
import 'basscss/css/basscss.css';
import 'muse-ui/dist/muse-ui.css';
import 'swiper/dist/css/swiper.css'
// require('muse-ui/dist/muse-ui.css')

import './css/icon.css';



import app from './app.vue';

Vue.config.devtools = true;
Vue.config.productionTip = true;

Vue.use(VueRouter);
Vue.use(plugin);
Vue.use(MuseUI)

const router = new VueRouter({
	base  : '/pages/wymusic',
	routes: routes,
});

new Vue({
	el         : '#app',
	render     : h => h(app),
	renderError: (h, err) => { return h('pre', {style: {color: 'red'}}, err.stack); },
	router     : router,
	store      : store
});
