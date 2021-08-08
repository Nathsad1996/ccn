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
      <v-col lg="8" md="8" cols="12">
        <v-card rounded="xl">
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
                  <v-card-text class="text-h5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum, pariatur cupiditate eos repellendus qui odit saepe
                    veniam sunt aspernatur, debitis totam maxime. Veniam, esse
                    ab. Totam doloribus cupiditate explicabo praesentium!
                  </v-card-text>
                  <v-card-actions>
                    <v-row class="mx-auto">
                      <v-col cols="12">
                        <v-btn-toggle>
                          <v-btn icon @click="quantity++"
                            ><v-icon>mdi-plus</v-icon></v-btn
                          >
                          <v-btn @click="quantity++">{{ quantity }}</v-btn>
                          <v-btn icon @click="decrease"
                            ><v-icon>mdi-minus</v-icon></v-btn
                          >
                        </v-btn-toggle>
                      </v-col>
                    </v-row>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg="4" md="4" cols="12">
        <v-card elevation="10" rounded="xl">
          <v-card-title class="text-lg-h4 text-md-h4 text-sm-h5">
            <v-container>
              <v-row>
                <v-col class="text-center"> A partir de 10.000 CDF </v-col>
              </v-row>
              <v-row class="justify-center">
                <v-col cols="3">
                  <v-img
                    contain
                    height="50"
                    src="../assets/credit-card.svg"
                  ></v-img>
                </v-col>
                <v-col cols="3">
                  <v-img
                    contain
                    height="50"
                    src="../assets/mobile-payment.svg"
                  ></v-img
                ></v-col>
              </v-row>
            </v-container>
          </v-card-title>
          <v-card-text>
            <v-btn
              to="/shopping-cart"
              rounded
              outlined
              color="success"
              large
              block
            >
              <v-icon>mdi-credit-card-check-outline</v-icon>
              &nbsp; ACHETER</v-btn
            >
            <v-btn
              @click="addCart"
              class="mt-1"
              rounded
              outlined
              color="info"
              large
              block
            >
              <v-icon>mdi-cart-plus</v-icon>
              &nbsp; AJOUTER</v-btn
            >
          </v-card-text>
          <v-card-actions>
            <v-container>
              <v-row class="justify-center">
                <v-col cols="3">
                  <v-img
                    contain
                    src="../assets/Fee_Shipping_Badge.png"
                    max-height="100"
                  ></v-img>
                </v-col>
                <v-col cols="3">
                  <v-img
                    contain
                    src="../assets/Secure_Payment_Badge.png"
                    max-height="100"
                  ></v-img>
                </v-col>
                <v-col cols="3">
                  <v-img
                    contain
                    src="../assets/Money-back_Guarantee_Badge.png"
                    max-height="100"
                  ></v-img>
                </v-col>
                <v-col cols="3">
                  <v-img
                    contain
                    src="../assets/Premium_Quality_Badge.png"
                    max-height="100"
                  ></v-img>
                </v-col>
              </v-row>
            </v-container>
          </v-card-actions>
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
                <v-row class="mx-auto">
                  <v-col lg="6" md="6" cols="12">
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
                      <v-btn block solo rounded type="submit">SOUMETTRE</v-btn>
                    </v-form>
                  </v-col>
                  <v-col lg="6" md="6" cols="12">
                    <v-virtual-scroll
                      :height="300"
                      :item-height="180"
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