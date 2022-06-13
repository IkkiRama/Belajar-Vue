<template>
<h1>Belajar VUEX</h1>

<router-link to="/">Home | </router-link>
<router-link to="/about">About | </router-link>
<router-link to="/contact">Contact | </router-link>
<router-link to="/post">Post | </router-link>
<button @click="logout">Logout</button>

<router-view />
<hr>
<br>
<br>
<br>
<p>Username : {{state.username}}</p>
<p>username2 : {{username}}</p>
<p>name : {{name}}</p>
<p>Like : {{like}}</p>
<p>Likes : {{likes}}</p>
<p>Getter Likes : {{ getLikes }}</p>
<pre>{{credential}}</pre>

</template>
<script setup>
import {reactive, computed} from 'vue'
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
const state = reactive({
    username : ""
})

const router = useRouter()
const store = useStore()
state.username = store.state.username

const like = computed(() => store.state.like)
const likes = computed(() => store.state.Post.likes)
const getLikes = computed(() => store.getters.getLikes)

const name = computed(() => store.state.User.name)
const username = computed(() => store.state.username)
const credential = computed(() => store.state.User.credential)

const logout = () =>{
    localStorage.setItem("auth", false)
    router.push({name : "Login"})
}

</script>