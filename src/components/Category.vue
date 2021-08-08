<template>
  <v-card
    hover
    rounded="xl"
    class="mx-auto mb-2"
    width="300"
    @mouseenter="revealCard"
    @mouseleave="revealCard"
  >
    <v-img src="../assets/streaming-tv-app.svg" height="220" contain></v-img>

    <v-expand-transition>
      <v-card
        rounded="xl"
        color="#798EA4"
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        height="100%"
        width="100%"
      >
        <v-card-title class="text-center mt-15">
          VISITEZ NOS MAGNIFIQUES PRODUITS
        </v-card-title>
        <v-card-actions class="d-flex justify-center">
          <v-btn rounded block outlined>
            details
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    reveal: false,
  }),
  methods: {
    revealCard() {
      this.reveal = !this.reveal;
    },
    goCategory() {
      this.$router.push("/category-detail");
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

.v-card:hover {
  cursor: pointer;
}
</style>
