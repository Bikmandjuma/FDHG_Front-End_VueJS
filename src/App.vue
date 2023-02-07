<template>
  <v-app>
    <v-app-bar
      app
      color="info"
      dark
    >
      <div class="d-flex align-center ">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <span style="font-size:15px;margin-top:3px;font-family:sans-serif;font-style:bold;">BIKMAN DJUMA</span>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        text
      >
        <span class="mr-2">Login</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="d-flex justify-center">

        <br>
        <Login />
        
    </v-main>
  </v-app>
</template>

<script>
import Login from '../components/Login.vue'
export default {
  name: 'App',

  components:{
    Login,
  }

}
</script>

<style>

</style>
