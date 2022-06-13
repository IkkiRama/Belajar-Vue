<template>
<h1 id="lifecycle" v-text="message"></h1>
<button @click="message = 'Kimak' ">Update Message</button> 
</template>
<script>
    export default{
        data(){
            return{
                message : "Hello Rifki"
            }
        },

        beforeCreate(){
            console.log("Before Create");
        },

        created(){
            console.log("Create");
            console.log(this.message);
            console.log(document.getElementById("#lifecycle"));
        },

        beforeMount() {
            console.log("Before Mount");
            console.log(this.message);
            console.log(document.getElementById("lifecycle"));
        },

        mounted() {
            console.log("Mounted");
            console.log(this.message);
            console.log(document.getElementById("lifecycle"));
        },


        beforeUpdate() {
            console.log("Before Update");
            console.log(this.message);
            console.log(document.getElementById("lifecycle"));
        },

        updated() {
            console.log("Update");
            console.log(this.message);
            console.log(document.getElementById("lifecycle"));
        },


        beforeUnmount() {
            console.log("Before Unmount");
        },


        unmounted() {
            console.log("Unmounted");
        },





    }
</script>