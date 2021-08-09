<template>
  <div>
    <v-row class="mx-auto mt-3">
      <v-col offset-lg="2" lg="8" cols="12">
        <v-card flat>
          <v-card-title class="d-flex justify-center text-lg-h2 text-h3">
            Nous Contacter
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field outlined placeholder="Votre Nom"></v-text-field>
              <v-text-field outlined placeholder="Votre Postnom"></v-text-field>
              <v-text-field outlined placeholder="Votre Email"></v-text-field>
              <v-textarea outlined placeholder="Votre Préoccupation"></v-textarea>
              <v-btn rounded color="success" large block>Envoyer</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col> </v-col>
    </v-row>
  </div>
</template>
