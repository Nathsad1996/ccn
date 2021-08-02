<template>
  <v-card
    class="mx-auto mb-2"
    width="300"
    @mouseenter="revealCard"
    @mouseleave="revealCard"
  >
    <v-card-text>
      <div>Téléviseurs</div>
      <p class="text-h4 text--primary">SAMSUNG</p>
      <p>adjective</p>
      <div class="text--primary">
        relating to or dependent on charity; charitable.<br />
        "an eleemosynary educational institution."
      </div>
    </v-card-text>

    <v-expand-transition>
      <v-card
        color="info"
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%"
      >
        <v-card-text class="pb-0">
          <p class="text-h4 text--primary">Déscription</p>
          <p>
            late 16th century (as a noun denoting a place where alms were
            distributed): from medieval Latin eleemosynarius,
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn block outlined @click="goCategory">
            <v-icon size="20">fas fa-external-link-alt</v-icon>
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
      this.$router.push('/category-detail');
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