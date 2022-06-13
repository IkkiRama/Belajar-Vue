<template>
<h1>Provided Inject</h1>
<Satu />

</template>
<script>
import Satu from "./components/ComponentSatu.vue"
export default{
    components:{Satu},
    data() {
        return {
            author:"Rifki Roma"
        }
    },

    provide(){
        return{
            ProvidedAuthor:this.author
        }
    }
}

</script>