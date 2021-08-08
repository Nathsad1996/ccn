<template>
  <v-container fluid>
    <v-row class="mb-2">
      <v-carousel hide-delimiter-background v-model="model" class="mt-2" :show-arrows="false">
        <v-carousel-item v-for="(color, i) in colors" :key="color">
          <v-sheet :color="color" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h2">Slide {{ i + 1 }}</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-row>
    <v-row class="mx-auto mb-2">
        <v-card width="100%" flat>
          <v-card-title>
            <v-icon>fas fa-border-all</v-icon> &nbsp; Nos Catégories
          </v-card-title>
          <v-card-text>
            <v-row>
              <Category></Category>
              <Category></Category>
              <Category></Category>
              <Category></Category>
            </v-row>
          </v-card-text>
        </v-card>
    </v-row>
    <v-row class="mx-auto mb-2">
        <v-card width="100%" flat>
          <v-card-title>
            <v-icon>fas fa-heartbeat</v-icon> &nbsp; Nos meilleures ventes
          </v-card-title>
          <v-card-text>
            <v-row>
              <Product></Product>
              <Product></Product>
              <Product></Product>
              <Product></Product>
            </v-row>
          </v-card-text>
        </v-card>
    </v-row>
  </v-container>
</template>

<script>
import Category from "../components/Category.vue";
import Product from "../components/Product.vue"
export default {
  name: "Home",
  data: () => ({
    model: 0,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
  }),
  components: { Category, Product },
};
</script>
