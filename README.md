# frontend

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

      <v-col class="hidden-md-and-up">
        <v-bottom-sheet v-model="sheet" scrollable>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon outlined v-bind="attrs" v-on="on" class="mr-2 float-right">
              <v-icon>mdi-filter</v-icon>
              </v-btn>
          </template>
          <v-card>
            <v-toolbar color="dark" dense flat elevation="2">
              <v-spacer></v-spacer>
              <v-btn icon @click="sheet = !sheet">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <v-list>
                <v-subheader>Filtrer par </v-subheader>
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  @click="sheet = false"
                >
                  <v-list-item-title> {{ item }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-bottom-sheet>
      </v-col>
      <v-col
        offset-lg="10"
        offset-md="10"
        lg="2"
        md="2"
        class="hidden-sm-and-down"
      >
        <v-select
          clearable
          flat
          solo
          open-on-clear
          dense
          prepend-inner-icon="mdi-filter"
          v-model="select"
          :items="items"
          label="Trier par"
          single-line
        ></v-select>
      </v-col>
