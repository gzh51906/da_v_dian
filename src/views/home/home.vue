<template>
        <div>
           <navbar/>
           <Home/>
     
        </div>
</template>

<script>
import navbar from "./navbar"
import Home from "./home_lq"
export default {
    name: 'home',
    components:{
        navbar,
     Home
    }
}
</script>

<style>

</style>
