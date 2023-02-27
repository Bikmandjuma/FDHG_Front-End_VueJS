<template>
  <v-main>
      <v-row>
          <v-col cols="12" md="4" sm="4"></v-col>
          <v-col cols="12" md="4" sm="4">

              <v-card
                elevation="20"
                class="mx-auto"
                max-width="344"
              >
                <v-card-text class="login-form text-center">
                  <div class="text-center">
                    <v-avatar size="80" color="indigo lighten-4">
                      <v-icon size="40">mdi-account</v-icon>
                    </v-avatar>
                    <h3>{{title}}</h3>
                  </div>
                  <v-form @submit="LoginHandleForm">
                    <v-text-field
                      type="email"
                      label="Email"
                      prepend-inner-icon="mdi-account"
                    ></v-text-field>
                    <v-text-field
                      type="password"
                      label="Password"
                      prepend-inner-icon="mdi-lock"
                      append-icon="mdi-eye"
                    ></v-text-field>
                    <v-btn 
                      color="info"
                      type="submit"
                    ><v-icon>mdi-icon</v-icon> Login</v-btn>
                  </v-form>
                </v-card-text>
                <v-card-actions class="text-center">
                  <p
                    text
                    color="teal accent-4"
                    @click="reveal=true"
                    style="padding-left:90px;"
                  >
                   <v-icon>mdi-key</v-icon> Forgot password
                  </p>
                </v-card-actions>

                <v-expand-transition>
                  <v-card
                    v-if="reveal"
                    class="transition-fast-in-fast-out v-card--reveal"
                    style="height: 62%;"
                  >
                    <v-card-text class="pb-0">
                        
                        <v-form class="pt-2" @submit="ForgotPSWDHandleForm">
                          <v-text-field
                            type="email"
                            label="Email"
                            prepend-inner-icon="mdi-email"
                          ></v-text-field>
                          <v-btn 
                            color="info"
                            type="submit"
                          ><v-icon>mdi-paper-plane</v-icon>Send reset link</v-btn>
                        </v-form>

                    </v-card-text>
                    <v-card-actions class="pt-4">
                      <p
                        text
                        color="teal accent-4"
                        @click="reveal = false"
                        style="padding-left:120px;"
                      >
                       <v-icon>mdi-back</v-icon>Back to login
                      </p>
                    </v-card-actions>
                  </v-card>
                </v-expand-transition>
              </v-card>

          </v-col>
          <v-col cols="12" md="4" sm="4"></v-col>
        </v-row>
    </v-main>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',

  data(){
    return {
      title:'Blog login page',
      uname:'',
      pswd:'',
      reveal: false,
    }
  },

  methods:{
      async submitForm(e){
        e.preventDefault()

        const response=await axios.post('http://localhost:8000/api/login',{
            username:this.uname,
            password:this.pswd
        });

        console.log(response);
        
      }
  }
};
</script>

<style>
  .v-card--reveal {
    bottom: 0;
    opacity: 1 !important;
    position: absolute;
    justify-content:center;
    text-align:center;
    width: 100%;
  }
</style>