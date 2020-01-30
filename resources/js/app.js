import $ from "jquery";
require('./bootstrap');

window.Vue = require('vue');
import VueParticles from 'vue-particles';
Vue.use(VueParticles);

$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

import theme from './components/theme8';

new Vue({
    el: '#theme',
    components:{
        'my-theme':theme
    }
});
