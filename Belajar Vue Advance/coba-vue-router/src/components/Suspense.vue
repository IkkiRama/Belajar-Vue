<template>
<h1>Child Suspense</h1>

<h3>{{ name }}</h3>

</template>
<script>
import {ref} from 'vue'
export default{
    async setup(){
        const name = ref("Rifki Romadhan")

        const getName = () => new Promise(resolve => setTimeout(() => resolve(name.value = "Nama saya Rifki Romadhan"), 3000))

        await getName()

        return{
            name
        }



    }
}
</script>
