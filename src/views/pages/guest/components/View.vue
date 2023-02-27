<template>
	<v-content>
		<router-view />

		<pages-guest-components-footer />
	</v-content>
</template>
<script>

	export default{
		name:'PagesGuestComponentsView',
		components:{
			PagesGuestComponentsFooter: () =>import('./Footer'),
		}
	}
</script>