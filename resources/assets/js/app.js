
const _ = require('lodash');

const Vue = require('vue');
const VueRouter = require('vue-router');
Vue.use(VueRouter);

const axios = require('axios');

Vue.prototype.$http = axios;

/*
Vue.http.interceptors.push((request, next) => {
    request.headers.set('X-CSRF-TOKEN', Laravel.csrfToken);
    next();
});
*/

const router = new VueRouter({
    routes: [

        { path: '/home', component: require('./components/Home.vue') },

    ]
});

Vue.component('home', require('./components/Home.vue'));

const app = new Vue({
    el: '#app',
    router,

    mounted() {
        var vue = this;
        vue.$router.push('/home');
    }

});
