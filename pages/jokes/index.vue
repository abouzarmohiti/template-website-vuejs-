<template>
  <div>
    <Joke v-for="joke in jokes"
          :key="joke.id"
          :id="joke.id"
          :joke="joke.joke"
    />
  </div>
</template>

<script>
  import axios from "axios";
  import Joke from "@/components/Joke"
    export default {
    components:{
      Joke
    },
      data(){
        return{
          jokes:[]
        }
      },
      async created(){
        const config={
            headers:{
              Accept: "application/json"
            }
          }
          try {
             let res = await axios.get('https://icanhazdadjoke.com/search',config)
             this.jokes=res.data.results;
          }catch (e) {
            console.log(e);
          }

      },
      head(){
        return{
            title:"title about",
          meta:[
            {
              hid : "disc",
              name:"desciption",
              content:"This is jokes"
            }
          ]
        }
      },
    }
</script>



