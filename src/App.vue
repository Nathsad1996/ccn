<template>
  <v-app>
    <!-- navigation drawer -->
    <v-navigation-drawer v-if="!registry" app v-model="drawer" temporary>
      <template v-slot:prepend>
        <v-list-item dense two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/men/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Nathan Sadala</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item to="/account-page" link>
          <v-list-item-icon>
            <v-icon>mdi-cog-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Mon compte</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-text-field
            rounded
            outlined
            clearable
            dense
            class="mt-3 hidden-sm-and-up"
            append-icon="mdi-magnify"
            placeholder="Rechercher un produit"
            @click:append="search"
            @keypress.enter="search"
          ></v-text-field>
        </v-list-item>
      </template>
      <v-divider></v-divider>
      <v-list>
        <v-list-item to="/" link>
          <v-list-item-content>
            <v-list-item-title>Accueil</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/products" link>
          <v-list-item-content>
            <v-list-item-title>Produits</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/categories" link>
          <v-list-item-content>
            <v-list-item-title>Catégories</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/contact" link>
          <v-list-item-content>
            <v-list-item-title>Nous contacter</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn text large rounded color="#CD212A" block @click="logout">
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <!-- bar de menu -->
    <Appbar v-if="!registry" @toggleDrawer="toggle"></Appbar>

    <!-- le contenu principal de l'application -->
    <v-main>
      <router-view />
    </v-main>

    <!-- notre footer -->
    <v-footer app padless>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>CCN</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import Appbar from "./components/Appbar.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: { Appbar },
  data: () => ({
    drawer: false,
  }),
  methods: {
    toggle(data) {
      this.drawer = data;
    },
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/");
      window.location.reload();
    },
    search() {},
  },
  computed: {
    ...mapGetters(["registry"]),
  },
};
</script>
