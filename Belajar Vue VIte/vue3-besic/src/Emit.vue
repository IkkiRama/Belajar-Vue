<template>
    <h1>Hai Dari Parent</h1>
    <ChildEmit ref="ChildComponent" @child-click="onPress" />
    <button @click="ClickSaya">Click Dari Parent</button>
</template>
<script>
import ChildEmit from "./components/ChildEmit.vue";
export default{
    components: {ChildEmit},
    methods:{
        onPress(value){
            console.log("Click dari child");
            console.log(value);
        },
        ClickSaya(){
            this.$refs.ChildComponent.onClick();
        } 
    }
}

</script>