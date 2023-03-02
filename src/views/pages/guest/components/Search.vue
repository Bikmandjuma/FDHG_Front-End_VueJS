	<tempate>
		<v-card
            class="mx-auto"
            color="grey-lighten-3"
            max-width="800"
            max-height="60"
            style="display: relative;margin-top:500px;"
          >
            <v-card-text>
              <v-form>
                <v-text-field
                  :loading="loading"
                  density="compact"
                  variant="solo"
                  label="Search dream house"
                  placeholder="Search by address eg : New york . . .  "
                  single-line
                  hide-details
                  @click:append-inner="onClick"
                ></v-text-field>
                <v-btn
                style="display: relative;margin-top:-60px;margin-left:330px;border: none; background: none;"
                ><v-icon>mdi-magnify</v-icon> </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
	</tempate>

	<script>
		export default{
			name:'PagesGuestComponentsSearch',

			data: () => ({
		      loaded: false,
		      loading: false,
		    }),

		    methods: {
		      onClick () {
		        this.loading = true

		        setTimeout(() => {
		          this.loading = false
		          this.loaded = true
		        }, 2000)
		      },
		    },
		}
	</script>