<template>
  <div id="app" style="background-color: steelblue">
    <div class="container-fluid col-md-2">
      <b-list-group v-for="userName of users" v-bind:key="userName['.key']">
        <b-list-group-item id="text" style="background-color: snow" size="100px" >
          {{userName['.key']}} {{countBets(userName)}}
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
  import { db } from './firebase'

  export default {
    data() {
      return {
        users: []
      }
    },

    firebase: {
      users: db.ref('Users').orderByChild("posts")
    },
    methods: {
      countBets(username){
        console.log(username);
        var postsCount = 0;
        for(var post in username.posts){
          postsCount++;
        }
        return postsCount;
      }
  }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

#text{
  color: steelblue;
  font-family: CordiaUPC,sans-serif;
  font-weight: bold;
  font-size: 24px;
  margin: 3px;
}
</style>
