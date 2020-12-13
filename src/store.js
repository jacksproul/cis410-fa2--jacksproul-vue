import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

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
        }

    }
})