<template>
  <div>
    <AppHeader/>
    <nuxt class="paddingRuter"/>
  </div>
</template>


<script>
  import AppHeader from '~/components/AppHeader.vue'

  export default {
     components: {
       AppHeader
    }
  }
</script>


<style>
  .paddingRuter{
    padding-top: 150px;
  }
</style>
