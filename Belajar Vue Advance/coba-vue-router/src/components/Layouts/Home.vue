<template>
<h1>Ini Halaman Home</h1>


<button @click="addLikes">Add Like</button>
<button @click="setUsername('Rifki Anjay')">Set Username</button>
<button @click="getCredential">Get Credential</button>

<p>Username : {{username}}</p>

<p>Likes : {{suka}}</p>
<p>Fake Likes : {{fakeLikes}}</p>

<pre>{{credential}}</pre>
 
</template>
 

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
    computed : {
        ...mapState({
            username : state => state.User.username,
            credential : state => state.User.credential,
            suka : state => state.Post.likes,
        }),

        ...mapGetters({
            fakeLikes :"Post/getFakeLikes"
        })
    },

    methods:{
        ...mapMutations({
            addLikes : "Post/addLikes",
            setUsername : "User/setUsername",
            setCredential : "User/setCredential",
        }),

        ...mapActions({
            getCredential : "User/getCredential"
        })
    }
}
</script>
