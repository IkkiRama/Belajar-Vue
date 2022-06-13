<template>
<h1>Ini Halaman Home</h1>


<button @click="addLikes">Add Like</button>
<button @click="setUsername('Rifki Anjay')">Set Username</button>
<button @click="getCredential">Get Credential</button>

<p>Username : {{username}}</p>
<!-- <p>Likes : {{likes}}</p> -->

<p>Likes : {{suka}}</p>
<p>Fake Likes : {{fakeLikes}}</p>

<pre>{{credential}}</pre>

</template>
<!-- <script setup>
import {useStore} from 'vuex'
import {computed} from 'vue'
const store = useStore()
 

const username = computed(() => store.state.username)
const likes = computed(() => store.state.likes)
const fakeLikes = computed(() => store.getters.getFakeLikes)
const credential = computed(() => store.state.credential)

</script> -->

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
    computed : {
        ...mapState(["username", "credential"]),
        ...mapState({
            suka : "likes"
        }),

        // ...mapGetters(["getFakeLikes"])
        ...mapGetters({
            fakeLikes : "getFakeLikes"
        })
    },


    methods:{
        ...mapMutations(["addLikes", "setUsername", "setCredential"]),

        ...mapActions(["getCredential"])
    }
}
</script>
