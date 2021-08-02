<template>
  <div>
    <v-row>
      <v-col lg="3" md="3" sm="4" class="mx-auto mt-10">
        <v-card flat class="pl-5 pr-5" rounded="lg">
          <v-card-title class="justify-center text-center">
            Bienvenu(e), enregistrez-vous !
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field
                solo
                dense
                outlined
                rounded
                placeholder="Nom"
              ></v-text-field>
              <v-text-field
                solo
                dense
                outlined
                rounded
                placeholder="Postnom"
              ></v-text-field>
              <v-text-field
                solo
                dense
                outlined
                rounded
                placeholder="Email"
                append-icon="mdi-at"
              ></v-text-field>
              <v-text-field
                solo
                dense
                outlined
                rounded
                placeholder="Mot de passe"
                v-model="password"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show ? 'text' : 'password'"
                @click:append="show = !show"
              ></v-text-field>
              <v-text-field
                solo
                dense
                outlined
                rounded
                placeholder="Confirmer mot de passe"
                v-model="passwordConfirm"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                @click:append="show1 = !show1"
              ></v-text-field>
              <div>
                <v-btn rounded text small color="success" outlined
                  >S'enrgistrer</v-btn
                >
                <v-btn
                  rounded
                  @click="previous"
                  text
                  small
                  outlined
                  color="error"
                  class="float-right"
                  >Annuler</v-btn
                >
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    show: false,
    show1: false,
    password: "",
    passwordConfirm: "",
    previousRoute: null,
  }),
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.previousRoute = from;
    });
  },
  methods: {
    ...mapActions(["setRegistry"]),
    previous() {
      this.setRegistry(false);
      this.$router.push(this.previousRoute.path);
    },
  },
};
</script>
<style></style>