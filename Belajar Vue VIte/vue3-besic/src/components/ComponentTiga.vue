<template>

<h1>Hai, ini Component Tiga</h1>
<p>{{ ProvidedAuthor }}</p>

</template>
<script>
export default{
    inject:["ProvidedAuthor"]

}

</script>