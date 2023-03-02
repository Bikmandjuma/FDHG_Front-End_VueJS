<template>
<v-footer id="footer">
      <v-row>
        <v-col cols="12" md="4" ms="12" class="text-center">
          <h3 class="white--text"><v-icon color="white">mdi-home</v-icon>Masaka Sector</h3><br>
          <p class="white--text">Muhawe ikaze mu murenge wa masaka <br>waba ufite ikibazo ?</p>
          <router-link to="/complain"> <v-btn style="color: steelblue;">Kanda hano</v-btn></router-link>
        </v-col>
        <v-col cols="12" md="4" ms="12" id="footer-links">
          <h3 class="text-center white--text"><v-icon color="white">mdi-hand-down</v-icon> Aho Wakanda(links)</h3><br>
          
          <v-row class="text-center">
            <v-col
                cols="12"
                sm="6"
                md="6"
            >
              <p><router-link to="/"><v-icon color="white">mdi-home</v-icon> Ahabanza</router-link></p>
          
              <p><router-link to="/amakuru"><v-icon color="white">mdi-newspaper</v-icon> Amakuru</router-link></p>
            
              <p><router-link to="/serivise"><v-icon color="white">mdi-wrench</v-icon> Serivise</router-link></p>
            </v-col>

            <v-col
                cols="12"
                sm="6"
                md="6"
            >
              <p><router-link to="/complain"><v-icon color="white" class="main-links">mdi-pen</v-icon> Waba ufite ikibazo</router-link></p>
            
              <p><router-link to="/abakozi"><v-icon color="white">mdi-account-multiple</v-icon> Abakozi</router-link></p>
           
              <p><router-link to="/login"><v-icon color="white">mdi-lock-open</v-icon> Staff's Login</router-link></p>
            </v-col>

          </v-row>

        </v-col>
        <v-col cols="12" md="4" ms="12" id="footer-address" class="text-center">
          <h3 class="white--text">Aho Wadusanga (Address)</h3><br>
            <p><router-link to="/contact"><v-icon color="white">mdi-phone</v-icon> +250785389000</router-link></p>
            <p><router-link to="#"><v-icon color="white">mdi-map-marker</v-icon>Kigali,Kicukiro,Masaka</router-link></p>
            <div id="footer-social-media">
              <router-link to="/facebook"><v-icon color="white">mdi-facebook</v-icon></router-link>
              <router-link to="/whatsapp"><v-icon color="white">mdi-whatsapp</v-icon></router-link>
              <router-link to="/twitter"><v-icon color="white">mdi-twitter</v-icon></router-link>
              <router-link to="/email"><v-icon color="white">mdi-email</v-icon></router-link>
            </div>
        </v-col>
        
        <v-row>
         <v-col
              cols="12"
              sm="12"
              md="12"
              class="text-center"
        >
          <p class="white--text">Copyright &copy; {{currentyear}} , Masaka sector </p>

        </v-col>
      </v-row>


      </v-row>

    </v-footer>
</template>

<script>
  export default {
    name: 'PagesGuestComponentsFooter',

    data (){
      
      return{
        CurrentYear:new Date().getFullYear(),
        links: [
          {
            href: '#',
            text: 'Creative Tim',
          },
          {
            href: '#',
            text: 'About Us',
          },
          {
            href: '#',
            text: 'Blog',
          },
          {
            href: '#',
            text: 'Licenses',
          },
        ],
      }

    },
  }
</script>

<style>

 #footer{
  background-color: steelblue;
  margin-bottom:-20px;
 }
 #footer-links a{
    text-decoration: none;
    color:whitesmoke;
/*    margin-left: 130px;*/
  }

  #footer-links a:hover{
    color:white;
/*    margin-left:135px;*/
    margin-left: 5px;
  }

  #footer-social-media a{
    text-decoration: none;
    padding: 10px;
  }

  #footer-address a{
    text-decoration: none;
    color:white;
  }

  #footer-address a:hover{
    margin-left: 5px;
  }

  a{
    text-decoration: none;
  }
</style>