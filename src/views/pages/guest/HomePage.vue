<template>
  <v-carousel
    cycle
    height="600"
    hide-delimiter-background
    show-arrows="hover"
  >
    <v-carousel-item>
      <v-img :src="image_bg1" alt="bg-img1"></v-img>
    </v-carousel-item>

 <!--    <v-carousel-item>
      <v-img :src="image_bg2" alt="bg-img2"></v-img>
    </v-carousel-item> -->

    <v-carousel-item>
      <v-img :src="image_bg3" alt="bg-img3"></v-img>
    </v-carousel-item>
  </v-carousel>
  <!-- <pages-guest-components-homecomponents /> -->
</template>

<script>
import image_bg1 from '@/assets/homepage/hero_bg_1.jpg'
import image_bg2 from '@/assets/homepage/hero_bg_2.jpg'
import image_bg3 from '@/assets/homepage/hero_bg_3.jpg'
  export default {
    	name:'HomePage',
      data () {
          return {
              image_bg1,
              image_bg2,
              image_bg3,
          }
      },

      components:{
          PagesGuestComponentsHomeContent: () =>import('./components/HomeContent'),
      },


  }

</script>
