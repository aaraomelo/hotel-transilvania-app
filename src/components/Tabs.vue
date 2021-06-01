<template>
  <v-card>
    <v-toolbar
      color="rgb(0,153,153)"
      dark
      flat
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="../assets/logo.png"
          width="190"
        />
      </div>
      <template v-slot:extension>
        <v-tabs
          v-model="tabs"
          centered
        >
          <v-tab >
            Hóspedes
          </v-tab>
          <v-tab >
            Checkins
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <guests/>
      </v-tab-item>
      <v-tab-item>
        <checkins/>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import Guests from './Guests/';
import Checkins from './Checkins';

  export default {
    name: "Tabs",
    components: {
      Guests,
      Checkins
    },
    data () {
      return {
        tabs: null,
      }
    },
  }
</script>