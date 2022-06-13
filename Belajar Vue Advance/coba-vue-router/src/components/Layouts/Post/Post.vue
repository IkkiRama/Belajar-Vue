<template>
<h1>Detail Post</h1>
<p>Title : {{state.post.title}}</p>
<p>Body : {{state.post.body}}</p>

<br> 
<br>
<br>

<button @click="addLikes">Likes</button>
</template>
<script setup>
import axios from 'axios'
import {reactive, onMounted} from 'vue'
import {useRoute} from 'vue-router'
import {useStore} from 'vuex'

const state = reactive({
    post : []
})

const route = useRoute()
const store = useStore()
const id = route.params.id

const getPost = async () => {
    let result = await axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
    state.post =  result.data;
}

const addLikes = () =>{
    store.commit("addLikes")
}

onMounted(() => getPost())



</script>
