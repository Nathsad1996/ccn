<template>
  <div>
    <v-row class="mx-auto mt-1">
      <v-col class="d-flex justify-center" cols="12">
        <span class="text-h3 text-center">Vos Commandes</span>
      </v-col>
    </v-row>
    <v-row class="mx-auto d-flex justify-center mb-2">
      <v-col lg="8" md="8" cols="12">
        <v-card class="mb-1">
          <v-card-text>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Nom</th>
                    <th class="text-left">Prix</th>
                    <th class="text-left">Quantité</th>
                    <th class="text-left">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in desserts" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.calories }}</td>
                    <td>
                        <input type="number" v-model="item.quantity">
                    </td>
                    <td>{{ item.calories * item.quantity }} CDF</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg="3" md="3" cols="12">
        <v-card  rounded="lg">
          <v-card-title class="justify-center"
            >RESUME DE LA COMMANDE</v-card-title
          >
          <v-card-subtitle class="d-flex justify-center"
            >Les frais de livraison sont gratuits</v-card-subtitle
          >
          <v-card-text>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th>SOUS TOTAL</th>
                    <th>{{ subtotal }} CDF</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Taxe</td>
                    <td>{{ parseInt(subtotal * 0.1) }} CDF</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>{{ Math.round(subtotal + subtotal * 0.1) }} CDF</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
          <v-card-actions>
            <v-btn to="/payment" x-large block color="success" dark> ALLER AU PAIEMENT </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    desserts: [
      {
        name: "Frozen Yogurt",
        calories: 159,
        quantity: 2,
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
        quantity: 2,
      },
      {
        name: "Eclair",
        calories: 262,
        quantity: 2,
      },
      {
        name: "Cupcake",
        calories: 305,
        quantity: 2,
      },
    ],
  }),
  computed: {
    subtotal() {
      return this.desserts
        .map((o) => o.calories * o.quantity)
        .reduce((sum, value) => sum + value);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>