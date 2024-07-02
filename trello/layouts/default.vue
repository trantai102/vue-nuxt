<template>
    <div class="flex">
        <AppSiderBar/>
        <slot/>
    </div>
</template>
<script lang="ts">
import AppSiderBar from '../components/AppSiderBar.vue'
export default {
    components:{
        AppSiderBar
    }
}
</script>
<style>
    
</style>