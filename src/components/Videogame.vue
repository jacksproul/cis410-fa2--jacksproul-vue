<template>
    <div>
        <h1>VIDEOGAMES</h1>
        <hr/>

        <table class = "table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Mode Type</th>
                    <th>Release Date</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="thisGame in videogame" :key="thisGame.GamePK">
                    <th>{{thisGame.Title}}</th>
                    <td>{{thisGame.Mode_Type}}</td>
                    <td>{{thisGame.Release_Date}}</td>
                    <td>
                        <router-link :to="`/videogame/${thisGame.GamePK}`">
                            <button type="button" class="btn btn-primary">Details</button>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table> 
    </div>
</template>

<script>
export default {
    computed: {
        videogame(){return this.$store.state.videogame}
    }
}
</script>

<style scoped>

</style>