<template>
	<v-app-bar app color="teal" height="20" style="margin:30px;border-radius:20px;">
       <v-app-bar-nav-icon 
          @click="drawer = true" 
          class="d-flex d-sm-none"
          
          ></v-app-bar-nav-icon>
        <v-toolbar-title  class="mt-10"><v-icon style="margin-top:-4px;color: white;">mdi-home</v-icon><b style="font-family:serif;color: white;">Find dream home globally</b></v-toolbar-title>
        
        <template v-slot:extension>
          <v-spacer></v-spacer>
          <v-tabs
            v-model="tab"
            align-with-title
            class="d-none d-sm-flex"
            id="tabs_nav"
          >
            <tab><router-link to="/"><v-icon color="white" class="main-link">mdi-home</v-icon>Home</router-link></tab>
            <tab><router-link to="/about"><v-icon color="white" class="main-link">mdi-newspape</v-icon>About us</router-link></tab>
            <tab><router-link to="/service"><v-icon color="white" class="main-link">mdi-wrench</v-icon>Service</router-link></tab>
            <tab><router-link to="/properties"><v-icon color="white" class="main-links">mdi-things</v-icon>Properties</router-link></tab>
            <tab><router-link to="/contact"><v-icon color="white" class="main-link">mdi-phone</v-icon>Contact us</router-link></tab>
            <tab style="margin-left:100px;"><router-link to="/contact"><v-icon color="white" class="main-link">mdi-account</v-icon>Account</router-link></tab>
          </v-tabs>
        </template>
    </v-app-bar>

</template>

<script>
	export default {
		name:'PagesGuestComponentsAppBar',
  }
</script>

<style scoped>
	#tabs_nav{
    margin-top:0px;
    margin-left: 400px;
  }

  #tabs_nav a{
    text-decoration:none;
    color:white;
    left:20px;
    padding:20px;
  }

  #tabs_nav a:hover{
    color:#eee;
    border-bottom:2px solid white;
  }

  .main-link{
    margin-top: -5px;
  }
</style>