<template>
  <v-app>
    <pages-guest-components-appBar />
    <pages-guest-components-drawer />
    <pages-guest-dashboard />
    <pages-guest-components-view />
  </v-app>
</template>

<script>
export default {
  name: 'PagesGuestIndex',

  components: {
    PagesGuestComponentsAppBar: () => import('./components/AppBar'),
    PagesGuestComponentsDrawer: () => import('./components/Drawer'),
    PagesGuestComponentsView: () => import('./components/View'),
    PagesGuestDashboard: () => import('./HomePage'),
  },

  data: () => ({
      expandOnHover: false,
  }),
}
</script>
