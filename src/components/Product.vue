<template>
  <v-card class="mx-auto mb-2" max-width="300">
    <v-img
      id="product"
      height="150"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>
    <v-card-title class="d-flex justify-center text-sm-body-2 text-md-body-1">
      <p>CHAWARMA</p>
    </v-card-title>
    <v-card-subtitle class="d-flex justify-center"> 5000 CDF </v-card-subtitle>
    <v-card-actions>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-btn color="success" block @click="addProduct" outlined>
              <v-icon>mdi-cart-plus</v-icon> &nbsp; Ajouter
            </v-btn>
          </v-col>
          <v-col cols="12">
            <v-btn color="info" block @click="productdetail" outlined>
              <v-icon>mdi-information</v-icon> &nbsp; Détails
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card-actions>
  </v-card>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    reveal: false,
  }),
  methods: {
    ...mapActions(["setCartCount"]),
    addProduct() {
      this.setCartCount();
    },
    productdetail() {
      this.$router.push("/product-detail");
    },
  },
};
</script>

<style scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
}

#product {
  cursor: pointer;
}
</style>