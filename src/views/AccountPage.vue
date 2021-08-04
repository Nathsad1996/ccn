<template>
  <div>
    <v-row class="mx-auto">
      <v-col>
        <v-tabs
          v-model="tab"
          show-arrows
          center-active
          centered
          mobile-breakpoint="sm"
          dark
        >
          <v-tab><v-icon>mdi-cart</v-icon> &nbsp; Vos Commandes </v-tab>
          <v-tab><v-icon>mdi-cog</v-icon> &nbsp; Votre compte </v-tab>
          <v-tab><v-icon>mdi-shopping</v-icon> &nbsp; Votre Boutique </v-tab>
        </v-tabs>
      </v-col>
    </v-row>
    <v-row class="mx-auto">
      <v-col cols="12">
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-data-table
              :headers="headers"
              :items="desserts"
              :items-per-page="5"
              class="elevation-1"
              locale="fr-fr"
            >
            </v-data-table>
          </v-tab-item>
          <v-tab-item>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-card rounded="xl">
                    <v-card-title
                      class="text-lg-h3 d-flex justify-center text-center"
                      >Informations du compte</v-card-title
                    >

                    <v-card-text>
                      <v-text-field
                        rounded
                        outlined
                        label="votre email"
                        readonly
                        append-icon="mdi-pencil"
                      ></v-text-field>
                      <v-text-field
                        rounded
                        outlined
                        label="votre email"
                        readonly
                        append-icon="mdi-pencil"
                      ></v-text-field>
                      <v-text-field
                        rounded
                        outlined
                        label="votre email"
                        readonly
                        append-icon="mdi-pencil"
                      ></v-text-field>
                      <v-text-field
                        rounded
                        outlined
                        label="votre email"
                        readonly
                        append-icon="mdi-pencil"
                      ></v-text-field>
                      <v-text-field
                        rounded
                        outlined
                        label="votre email"
                        readonly
                        append-icon="mdi-pencil"
                      ></v-text-field>
                      <v-text-field
                        rounded
                        outlined
                        label="votre email"
                        readonly
                        append-icon="mdi-pencil"
                      ></v-text-field>
                      <v-text-field
                        rounded
                        outlined
                        label="votre email"
                        readonly
                        append-icon="mdi-pencil"
                      ></v-text-field>
                      <v-text-field
                        rounded
                        outlined
                        label="votre email"
                        readonly
                        append-icon="mdi-pencil"
                      ></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn rounded block solo color="success"
                        >Sauvegarder</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
          <v-tab-item>
            <v-container>
              <v-row dense class="mx-auto">
                <v-col>
                  <v-card
                    id="accountimg"
                    rounded="xl"
                    color="#385F73"
                    height="200"
                    width="350"
                    dark
                  >
                    <v-container>
                      <v-row class="mx-auto mt-10">
                        <v-col cols="5">
                          <v-img
                            contain
                            src="../assets/catalog.svg"
                            aspect-ratio="1.6"
                          >
                          </v-img>
                        </v-col>
                        <v-col class="mt-4"> Votre catalogue </v-col>
                      </v-row>
                    </v-container>
                  </v-card>
                </v-col>
                <v-col>
                  <v-card
                    id="accountimg"
                    rounded="xl"
                    color="#385F73"
                    height="200"
                    width="350"
                    dark
                  >
                    <v-container>
                      <v-row class="mx-auto mt-10">
                        <v-col cols="5">
                          <v-img
                            contain
                            src="../assets/orders.svg"
                            aspect-ratio="1.6"
                          >
                          </v-img>
                        </v-col>
                        <v-col class="mt-4"> Les commandes clients </v-col>
                      </v-row>
                    </v-container>
                  </v-card>
                </v-col>
                <v-col>
                  <v-card
                    id="accountimg"
                    rounded="xl"
                    color="#385F73"
                    height="200"
                    width="350"
                    dark
                  >
                    <v-container>
                      <v-row class="mx-auto mt-10">
                        <v-col cols="5">
                          <v-img
                            contain
                            src="../assets/add-product.svg"
                            aspect-ratio="1.6"
                          >
                          </v-img>
                        </v-col>
                        <v-col class="mt-4"> Ajouter un produits </v-col>
                      </v-row>
                    </v-container>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    tab: null,
    headers: [
      {
        text: "Dessert (100g serving)",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Calories", value: "calories" },
      { text: "Fat (g)", value: "fat" },
      { text: "Carbs (g)", value: "carbs" },
      { text: "Protein (g)", value: "protein" },
      { text: "Iron (%)", value: "iron" },
    ],
    desserts: [
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: "1%",
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: "1%",
      },
      {
        name: "Eclair",
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: "7%",
      },
      {
        name: "Cupcake",
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: "8%",
      },
      {
        name: "Gingerbread",
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: "16%",
      },
      {
        name: "Jelly bean",
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: "0%",
      },
      {
        name: "Lollipop",
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: "2%",
      },
      {
        name: "Honeycomb",
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: "45%",
      },
      {
        name: "Donut",
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: "22%",
      },
      {
        name: "KitKat",
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: "6%",
      },
    ],
  }),
};
</script>

<style scoped>
#accountimg {
  cursor: pointer;
}
</style>