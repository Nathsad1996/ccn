<template>
  <v-card width="300px" class="mx-auto">
    <v-img
      :src="card.src"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="200px"
    >
      <v-card-title v-text="card.title"></v-card-title>
    </v-img>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="success" block outlined @click="storeDetail">
        <v-icon>mdi-arrow-expand</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["card"],
  data: () => ({}),
  methods: {
    storeDetail() {
      this.$router.push("/store-detail");
    },
  },
};
</script>

<style></style>