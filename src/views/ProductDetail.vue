<template>
  <div class="mb-2">
    <v-row class="mx-auto mt-1">
      <v-col class="float-left" cols="1">
        <v-btn icon @click="previous">
          <v-icon size="40"> mdi-arrow-left </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="mx-auto">
      <v-col class="ml-lg-10" lg="8" md="8" cols="12">
        <v-card>
          <v-card-text>
            <v-row>
              <v-col lg="6" md="6" cols="12">
                <v-carousel
                  hide-delimiter-background
                  vertical-delimiters
                  v-model="model"
                >
                  <v-carousel-item
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                    v-for="(color, i) in colors"
                    :key="color"
                  >
                    <v-sheet :color="color" height="100%" tile>
                      <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                      >
                        <div class="text-h2">Slide {{ i + 1 }}</div>
                      </v-row>
                    </v-sheet>
                  </v-carousel-item>
                </v-carousel>
              </v-col>
              <v-col lg="6" md="6" cols="12">
                <v-card flat>
                  <v-card-title
                    class="
                      font-weight-bold
                      text-button text-lg-h5 text-center
                      justify-center
                    "
                    >La Spéciale CHAWARMA by Al-dar</v-card-title
                  >
                  <v-card-subtitle class="text-center text-h6">
                    <v-icon color="success"> mdi-check-all</v-icon> &nbsp;En
                    Stock. Disponible à la livraison.
                    <v-rating :value="3" readonly></v-rating>
                    46 avis
                  </v-card-subtitle>
                  <v-card-text>
                    <v-row class="mx-auto">
                      <v-col lg="6" cols="12" class="d-flex justify-center">
                        <v-btn-toggle>
                          <v-btn icon outlined @click="quantity++">
                            <v-icon color="primary">mdi-plus</v-icon></v-btn
                          >
                          <v-btn @click="quantity++">{{ quantity }}</v-btn>
                          <v-btn icon @click="decrease"
                            ><v-icon color="warning">mdi-minus</v-icon></v-btn
                          >
                        </v-btn-toggle>
                      </v-col>
                      <v-col lg="6" cols="12" class="mt-2 text-h5 text-center">
                        A 10.000 FC
                      </v-col>
                    </v-row>
                  </v-card-text>
                  <v-card-actions class="text-h5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum, pariatur cupiditate eos repellendus qui odit saepe
                    veniam sunt aspernatur, debitis totam maxime. Veniam,
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- card pay -->
      <v-col lg="3" md="3" cols="12">
        <v-card flat>
          <v-card-title class="d-flex justify-center text-h4">
            A PAYER {{ quantity * 10000 }} FC
          </v-card-title>
          <v-card-text>
            <v-btn
              to="/shopping-cart"
              class="mt-1"
              rounded
              color="#55B4B0"
              block
              x-large
            >
              <v-icon>mdi-cart-plus</v-icon>
              &nbsp; AJOUTER</v-btn
            >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mx-auto mb-2">
      <v-col>
        <v-tabs v-model="tab" center-active centered>
          <v-tab>Avis des clients</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-card>
              <v-card-title class="justify-center text-center text-lg-h4">
                Donner votre avis et lisez ce que les autres ont écrit!
              </v-card-title>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-form @submit.prevent="submitreview">
                      Ta note :
                      <v-rating :value="2"></v-rating>
                      Ton avis :
                      <br />
                      <v-textarea
                        clearable
                        dense
                        outlined
                        hint="laisse nous un avis"
                        placeholder="laisser nous un avis pour aider les autres à bien choisir"
                        :counter="100"
                      ></v-textarea>
                      <v-btn class="d-flex justify-center" color="info" large solo rounded type="submit">SOUMETTRE</v-btn>
                    </v-form>
                  </v-col>
                  <v-col cols="12" class="mt-2">
                    <v-card rounded="lg" class="pa-6">
                      <v-card-text>
                        <v-virtual-scroll
                          :height="400"
                          :item-height="140"
                          :items="items"
                        >
                          <template v-slot:default="{ item }">
                            <v-list-item link two-line>
                              <v-list-item-content>
                                <v-list-item-title>{{
                                  item.name
                                }}</v-list-item-title>
                                <v-list-item-subtitle>
                                  <v-rating :value="item.rating"></v-rating>
                                </v-list-item-subtitle>
                                {{ item.review }}
                              </v-list-item-content>
                            </v-list-item>
                          </template>
                        </v-virtual-scroll>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  components: {},
  data: () => ({
    tab: null,
    quantity: 0,
    model: 0,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
    previousRoute: null,
    items: [
      {
        name: "Nathan Sadala",
        rating: 4,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta totam atipsum, nemo, animi iusto voluptatibus",
      },
      {
        name: "Nathan Sadala",
        rating: 4,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta totam atipsum, nemo, animi iusto voluptatibus",
      },
      {
        name: "Nathan Sadala",
        rating: 4,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta totam atipsum, nemo, animi iusto voluptatibus",
      },
      {
        name: "Nathan Sadala",
        rating: 4,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta totam atipsum, nemo, animi iusto voluptatibus",
      },
      {
        name: "Nathan Sadala",
        rating: 4,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta totam atipsum, nemo, animi iusto voluptatibus",
      },
      {
        name: "Nathan Sadala",
        rating: 4,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta totam atipsum, nemo, animi iusto voluptatibus",
      },
      {
        name: "Nathan Sadala",
        rating: 4,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta totam atipsum, nemo, animi iusto voluptatibus",
      },
      {
        name: "Nathan Sadala",
        rating: 4,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta totam atipsum, nemo, animi iusto voluptatibus",
      },
      {
        name: "Nathan Sadala",
        rating: 4,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta totam atipsum, nemo, animi iusto voluptatibus",
      },
    ],
  }),
  methods: {
    ...mapActions(["setCartCount"]),
    decrease() {
      this.quantity === 0 ? 0 : this.quantity--;
    },
    previous() {
      this.$router.push(this.previousRoute);
    },
    submitreview() {},
    addCart() {
      this.setCartCount();
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.previousRoute = from;
    });
  },
  computed: {
    amount() {
      return this.quantity * 10000;
    },
  },
};
</script>
<style scoped>
</style>