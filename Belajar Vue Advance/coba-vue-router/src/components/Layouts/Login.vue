<template>
<h1>Halaman Login</h1>
<form action="">
    <ul>
        <li>
            <label for="username">username</label>
            <input type="text" name="username" id="username" v-model="username">
        </li>

        <li>
            <label for="password">password</label>
            <input type="password" name="password" id="password" autocomplete>
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
import {ref} from 'vue'

const username = ref("")

const router = useRouter()
const store = useStore()


const login = () =>{
    store.commit("User/setUsername", username.value)
    store.dispatch("User/getCredential")
    localStorage.setItem("auth", true)
    router.push({name : "Home"})
}
</script>