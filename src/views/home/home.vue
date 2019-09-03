<template>
        <div>
           <navbar/>
           <lunbo/>
           <mainl/>
        </div>
</template>

<script>
import navbar from "./navbar"
import lunbo from "./home_lq/lunbo"
import mainl from "./home_lq/main"
export default {
    name: 'home',
    components:{
        navbar,
        lunbo,
        mainl
    }
}
</script>

<style>

</style>
