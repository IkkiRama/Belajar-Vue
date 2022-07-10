<template>
<h1>Test</h1>
</template>
<script setup>
import {reactive, onMounted} from "vue"
import axios from "axios"
import db from "./firebase/skd"
const state = reactive({
    city : "Purbalingga",
    cities : []
})

const getCityWeather = () =>{
    const firebaseDB = db.collection("cities")
    firebaseDB.onSnapshot(snapshot =>{
        snapshot.forEach(async (doc) =>{
            console.log(doc);
            // state.cities.push(doc.data())
        })

        // state.cities = snapshot.docs.map(doc =>{
        //     return {
        //         id : doc.id,
        //         ...doc.data()
        //     }
        // })
    })
}

const getCurrentWeather = () =>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${state.city}&units=imperial&appid=eef18f70a09482a342c53291f43445c9`).then( response => console.log(response.data))
}

onMounted(() => {
    getCityWeather()
})


</script>