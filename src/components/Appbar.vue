<template>
  <v-app-bar height="70"  app>
    <v-btn icon @click="navigationDrawer">
      <v-icon size="40">mdi-menu</v-icon>
    </v-btn>

    <v-app-bar-nav-icon @click="goHome">
      <v-icon size="40">mdi-shopping</v-icon>
    </v-app-bar-nav-icon>

    <v-toolbar-title class="d-none d-sm-flex">CCN</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-text-field
    background-color="white"
      rounded
      outlined
      clearable
      class="mt-7 d-none d-sm-flex"
      append-icon="mdi-magnify"
      placeholder="Rechercher un produit"
      @click:append="search"
      @keypress.enter="search"
    >
    </v-text-field>

    <v-spacer></v-spacer>

    <v-btn icon to="/shopping-cart">
      <v-icon>mdi-cart-outline</v-icon>
      {{ cartcount }}
    </v-btn>

    <v-dialog v-model="loginForm" width="400">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon rounded small v-bind="attrs" v-on="on">
          <v-icon>mdi-login</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="justify-center"
          >Se connecter</v-card-title
        >
        <v-card-text>
          <v-form>
            <v-text-field
              dense
              outlined
              placeholder="Email ou Login"
              append-icon="mdi-at"
            ></v-text-field>
            <v-text-field
              dense
              outlined
              placeholder="Mot de passe"
              v-model="password"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              @click:append="show = !show"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions class="">
          <v-btn @click="login" rounded block large color="success" outlined
            >Se Connecter</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-account-plus-outline</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-list-item v-bind="attrs" v-on="on" link>
              <v-icon>mdi-account-plus-outline</v-icon>
              &nbsp;S'enregistrer
            </v-list-item>
          </template>

          <v-card outlined>
            <v-card-title>En tant que :</v-card-title>
            <v-card-text>
              <v-list>
                <v-list-item @click="goSupplier" link>
                  Fournisseur
                </v-list-item>
                <v-list-item @click="goNewUser" link> Utilisateur </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  data: () => ({
    loginForm: null,
    show: false,
    password: "",
    tab: null,
    dialog: null,
    lang: ["Lingala", "Swahili", "Tshiluba", "Kikongo"],
  }),
  methods: {
    ...mapActions(["setRegistry"]),
    navigationDrawer() {
      this.$emit("toggleDrawer", true);
    },
    goHome() {
      this.$router.push("/");
    },
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    goSupplier() {
      this.dialog = false;
      this.setRegistry(true);
      this.$router.push("/new-supplier");
    },
    goNewUser() {
      this.dialog = false;
      this.setRegistry(true);
      this.$router.push("/new-user");
    },
    login() {
      this.loginForm = false;
      console.log("you're logged in");
    },
    search(){
      console.log("i'm search action");
    }
  },
  computed: {
    ...mapState(["cartcount"]),
  },
};
</script>
