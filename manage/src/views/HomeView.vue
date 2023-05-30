<template>
<!--首页-->
  <h1>首页</h1>
</template>

<script setup>
import {getType} from '@/axios/api'
import {onMounted} from "vue";
onMounted(function(){
    getType({}).then
})
</script>

<style
    scoped>

</style>
