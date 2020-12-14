import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import routes from './routes.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: null,
        user: null,
        videogame: []
    },
    mutations: {
        storeTokenInApp(state, myToken){
            state.token = myToken
        },
        storeUserInApp(state, myUser){
            state.user = myUser
        },
        storeGames(state,myGames){
            state.videogame = myGames
        },
        clearAuthData(state){
            state.token = null;
            state.user = null;
        }
    },
    actions: {
        getGames({commit}){
            axios.get('/videogame')
            .then((myResponse)=>{
                console.log("response from getGames action", myResponse);
                commit('storeGames', myResponse.data)
            })
            .catch(()=>{
                console.log("error in getGames action")
            })
        },
        logout({commit, state}){
            axios.post('/player/logout', null, {
                headers: {
                    Authorization: `Bearer ${state.token}`
                }
            });

            commit('clearAuthData');

            routes.replace("/");
        }

    }
})