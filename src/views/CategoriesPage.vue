<template>
  <div>
    <v-row class="mt-2 mx-auto">
      <!-- bouton pour le filtre -->
      <v-col class="hidden-md-and-up">
        <v-bottom-sheet v-model="sheet" scrollable>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon outlined v-bind="attrs" v-on="on" class="mr-2 float-right">
              <v-icon>mdi-filter</v-icon>
              </v-btn>
          </template>
          <v-card>
            <v-toolbar color="dark" dense flat elevation="2">
              <v-spacer></v-spacer>
              <v-btn icon @click="sheet = !sheet">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <v-list>
                <v-subheader>Filtrer par </v-subheader>
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  @click="sheet = false"
                >
                  <v-list-item-title> {{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-bottom-sheet>
      </v-col>
      <v-col
        offset-lg="10"
        offset-md="10"
        lg="2"
        md="2"
        class="hidden-sm-and-down"
      >
        <v-select
          clearable
          flat
          solo
          open-on-clear
          dense
          prepend-inner-icon="mdi-filter"
          v-model="select"
          :items="items"
          label="Trier par"
          single-line
        ></v-select>
      </v-col>
    </v-row>
    <v-row class="mx-auto">
      <v-col>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row class="mx-auto">
      <!-- la liste de nos produits -->
      <v-col v-for="(index, i) in items" :key="i">
        <Category></Category>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Category from "../components/Category.vue";
export default {
  components: { Category },
  data: () => ({
    select: null,
    sheet: false,
    items: Array.from(Array(8).keys()),
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