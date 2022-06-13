<template>
<h1>Daftar Post</h1>
<ul>
    <li v-for="post in state.posts" :key="post" >
    <a :href="`/post/${post.id}`">{{post.title}}</a>   
    </li>
</ul>
 
</template>
<script setup>
import axios from 'axios'
import {onMounted, reactive} from 'vue'
const state = reactive({
    posts : []
}) 
const getPost = async () =>{
    let response = await axios.get("http://jsonplaceholder.typicode.com/posts")
    state.posts = response.data.slice(0,10)
}
    

onMounted(() => getPost())


</script>