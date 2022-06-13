<template>
    <h1>Hai Dari Child</h1>
    <button @click="onPress">Click dari Child</button>
</template>
<script> 
export default{
    emits:['child-click'],
    methods:{
        onClick(){
            console.log("Click dari parent");
        },

        onPress(){
            this.$emit('child-click', "Kimak")
        }
    }
}

</script>