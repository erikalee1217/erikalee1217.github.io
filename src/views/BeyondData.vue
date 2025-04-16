<template>
  <v-container grid-list-xl>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-dialog
        v-model="image.dialog"
        lazy
        max-width="800"
        v-for="image in images"
        :key="image.title"
      >
        <template v-slot:activator="{ on }">
          <v-flex xs12 sm6 md4 lg4 xl4 v-on="on">
            <v-card hover flat color="transparent">
              <v-img
                :src="image.poster"
                height="230"
                :alt="image.title"
                lazy-src="https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif"
              ></v-img>
              <v-card-title primary-title class="justify-center">{{image.title}}</v-card-title>
            </v-card>
          </v-flex>
        </template>
        <v-card v-if="image.dialog">
          <v-img :src="image.poster"></v-img>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  metaInfo: {
    title: "Beyond Data ",
    titleTemplate: "%s | Erika's Data Travelogue",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Erika's interests and hobbies"
      },
      { charset: "utf-8" },
      { property: "og:title", content: "Erika's Data Travelogue" },
      { property: "og:site_name", content: "Erika's Data Travelogue" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://erikalee1217.github.io/" },
      {
        property: "og:image",
        content: "https://i.imgur.com/qH0HBjD.png"
      },
      {
        property: "og:description",
        content:
          "Erika's interests and hobbies"
      }
    ]
  },
  data() {
    return {
      dialog: false,
      images: [
        {
          dialog: false,
          title: "Photography - Capturing light and shadow 🔅",
          poster: "https://i.imgur.com/2JDH4dh.jpg"
        },
        {
          dialog: false,
          title: "Travel - Wandering through seas and sunsets 🌅",
          poster: "https://i.imgur.com/7lBMUtD.jpg"
        },
        {
          dialog: false,
          title: "Violin - Finding harmony in violin strings 🎻",
          poster: "https://i.imgur.com/9pUSNXN.jpg"
        },
        {
          dialog: false,
          title: "Stargazing - Chasing stars on clear nights 🌌",
          poster: "https://i.imgur.com/sLaJ5PO.jpg"
        },
        {
          dialog: false,
          title: "Baking - Baking sweetness into life 🧁",
          poster: "https://i.imgur.com/cvEE7xJ.jpg"
        },
        {
          dialog: false,
          title: "Dancing - Moving to the rhythm with friends 💃🏻",
          poster: "https://i.imgur.com/cC1wHwt.jpg"
        }
      ]
    };
  }
};
</script>

<style  scoped>
</style>
