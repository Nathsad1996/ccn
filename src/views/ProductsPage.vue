<template>
  <div>
    <v-row class="mt-2 mx-auto">
      <v-col class="d-flex justify-end">
        <v-card flat rounded="xl" height="48" width="60%">
          <v-card-text>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="grey lighten-1" v-bind="attrs" v-on="on" rounded class="float-right">
                  <v-icon>mdi-filter-variant</v-icon>
                  filtrer
                </v-btn>
              </template>
              <v-list>
                <v-list-item link>Prix</v-list-item>
                <v-list-item link>Marque</v-list-item>
                <v-list-item link>Categories</v-list-item>
              </v-list>
            </v-menu>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mx-auto">
      <v-col>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row class="mx-auto">
      <!-- la liste de nos produits -->
      <v-col lg="2" sm="6" cols="6" v-for="(index, i) in items" :key="i">
        <Product></Product>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Product from "../components/Product.vue";
export default {
  components: { Product },
  data: () => ({
    select: null,
    sheet: false,
    items: Array.from(Array(31).keys()),
    tiles: [
      { img: "keep.png", title: "Keep" },
      { img: "inbox.png", title: "Inbox" },
      { img: "hangouts.png", title: "Hangouts" },
      { img: "messenger.png", title: "Messenger" },
      { img: "google.png", title: "Google+" },
      { img: "keep.png", title: "Keep" },
    ],
  }),
};
</script>
<style></style>
