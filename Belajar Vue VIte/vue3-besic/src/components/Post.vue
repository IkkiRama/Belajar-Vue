<template>

<h1>Ini adalah Halaman Post</h1>
<h3>Daftar Post</h3>

<p v-for="post in posts" :key="post" v-text="post.name"></p>

</template>
<script>

export default{
    data() {
        return {
            posts:[]
        }
    },

    async created(){
        const res = await fetch("https://swapi.dev/api/planets")
        const { results } = await res.json()
        this.posts = results;
    }
}

</script>