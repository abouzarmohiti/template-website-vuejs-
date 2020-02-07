<template>
  <divs>
    <AppHeader/>
    <Banner/>
    <nuxt class="paddingRuter"/>
  </divs>
</template>


<script>
  import AppHeader from '~/components/AppHeader.vue'
  import Banner from '~/components/Banner.vue';

  export default {
     components: {
       Banner,
       AppHeader
    }
  }
</script>


<style>
  .paddingRuter{
    padding-top: 150px;
  }
</style>
