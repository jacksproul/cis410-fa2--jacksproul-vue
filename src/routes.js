import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import Account from './components/Account.vue';
import Login from './components/Login.vue';
import GameDetails from './components/GameDetails.vue';
import Videogames from './components/Videogames.vue';
import NotFound from './components/NotFound.vue';
import ReviewCreate from './components/ReviewCreate.vue';
import SignUp from './components/SignUp.vue';

Vue.use(VueRouter);

const routes = [
    {path: '/', component: Home},
    {path: '/account', component: Account},
    {path: '/signin', component: Login},
    {path: '/videogames', component: Videogames},
    {path: '/videogames/:pk', component: GameDetails,
        children: [
            {path: 'review', component: ReviewCreate}
        ]},
    {path: '/signup', component: SignUp},
    {path: '/:invalidroute(.*)', component: NotFound},
]

export default new VueRouter({mode: 'history', routes:routes})