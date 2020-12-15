<template>
    <div>
        <div class ="card">
            <div class ="card-body">
                <h2 class = "text-primary">{{videogame.Title}}</h2>
                <br/>
                <p>Release Date: <br/> <strong>{{videogame.Release_Date}}</strong></p>
                <p>Mode Type: <br/> <strong>{{videogame.Mode_Type}}</strong></p>
                <p>Build Language: <br/> <strong>{{videogame.Build_Language}}</strong></p>
                <p>Patch ID:  <br/> <strong>{{videogame.Patch_ID}}</strong></p>
            </div>
        </div>

        <br/>

        <router-link v-if="auth" :to="`/videogame/${this.$route.params.pk}/review`">
            <button type="button" class = "btn btn-success">Add a Review</button>
        </router-link>
        <router-link v-else :to="`/signin`">
            <button type="button" class = "btn btn-outline-success">Sign in to add a Review</button>
        </router-link>
        <br/>
        <br/>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    computed: {
        videogame(){
            var games = this.$store.state.videogame;
            var thisGame = games.find((aGame)=>aGame.GamePK == this.$route.params.pk)
            
            //console.log("here is the game you want: ", thisGame);
            return thisGame;
        },
        auth(){return this.$store.state.token}
    }
}
</script>

<style scoped>

</style>