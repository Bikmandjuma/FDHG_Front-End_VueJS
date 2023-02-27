<template>
	<v-app-bar app class="white" height="20" style="margin:30px;border-radius:20px;">
       <v-app-bar-nav-icon 
          @click="drawer = true" 
          class="d-flex d-sm-none"
          
          ></v-app-bar-nav-icon>
        <v-toolbar-title  class="mt-10"><v-icon style="margin-top:-4px;">mdi-home</v-icon><b style="font-family:serif;">Find dream home globally</b></v-toolbar-title>
        
        <template v-slot:extension>
          <v-spacer></v-spacer>
          <v-tabs
            v-model="tab"
            align-with-title
            class="d-none d-sm-flex"
            id="tabs_nav"
          >
            <tab><router-link to="/"><v-icon color="primary" class="main-link">mdi-home</v-icon>HOME</router-link></tab>
            <tab><router-link to="/about"><v-icon color="primary" class="main-link">mdi-newspape</v-icon>ABOUT US</router-link></tab>
            <tab><router-link to="/service"><v-icon color="primary" class="main-link">mdi-wrench</v-icon>SERVICE</router-link></tab>
            <tab><router-link to="/properties"><v-icon color="primary" class="main-links">mdi-pen</v-icon>PROPERTIES</router-link></tab>
            <tab><router-link to="/contact"><v-icon color="primary" class="main-link">mdi-phone</v-icon>CONTACT US</router-link></tab>
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
    margin-top: -10px;
    margin-left: 500px;
  }
  /*#app_bar{
    height:50px;
  }*/

  #tabs_nav a{
    text-decoration:none;
    color:blue;
    left:20px;
    padding:10px;
  }

  #tabs_nav a:hover{
    color:red;
    border-bottom:2px solid red;
  }
</style>