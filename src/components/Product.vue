<template>
  <v-card hover rounded="xl" class="mx-auto mb-2 mycard" width="300">
    <v-card-title class="text-body-1 title d-flex justify-center">Pagne VLISCO</v-card-title>
    <v-img
      contain
      @click="productdetail"
      class="cardimg"
      height="130"
      src="../assets/male-clothes.svg"
    >
    </v-img>
    <v-card-text>
      <v-row>
        <v-col class="price d-flex justify-start">
          30000 USD
        </v-col>
        <v-col class="d-flex justify-end">
          <v-btn
            outlined
            fab
            :color="color"
            class="mybutton"
            @click="addProduct"
            ><v-icon>{{ icon }}</v-icon></v-btn
          >
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    reveal: false,
    icon: "mdi-cart-plus",
    color: "white",
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
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Titillium+Web:wght@500&display=swap");

.title {
  font-family: "Titillium Web", sans-serif !important;
}
.price {
  font-family: "Poppins", sans-serif !important;
  font-weight: bolder;
}

.cardimg {
  cursor: pointer;
}

.mybutton {
  background-color: black;
}

.mycard{
  background-color: #F0EAD6;
}
</style>
