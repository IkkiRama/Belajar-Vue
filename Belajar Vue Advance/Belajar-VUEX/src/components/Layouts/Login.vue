<template>
<h1>This Is Login</h1>

<form action="">
<ul>
    <li>
        <label>
            username
            <input type="text" name="username" v-model="state.username">
        </label>
    </li>
    <li>
        <label>
            password
            <input type="password" name="password" autocomplete>
        </label>
    </li>
    <li>
        <button @click="login">Login</button>
    </li>
</ul>
</form>


</template>
<script setup>
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
import {reactive} from 'vue'
const route = useRouter()
const store = useStore()

const state = reactive({
    username : "",
})



const login = () =>{
    localStorage.setItem("auth", true)
store.state.username = state.username
store.dispatch("getCredential")
    route.push({name:"Home"})
}



</script>