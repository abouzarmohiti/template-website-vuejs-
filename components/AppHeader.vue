<template>
  <div>
    <h1>header</h1>
    <ul>
      <li>
        <nuxt-link to="/">Home Page</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">About Page</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/jokes">jokes Page</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from "@nuxtjs/axios";

  export default {
    name:"Appheader"
  }
</script>

<style scoped>

</style>
