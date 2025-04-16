<template>
  <v-layout column justify-center align-center class="mt-4 pt-2">
    <VueCompareImage
      hover
      :style="{
        width: $vuetify.breakpoint.mdAndUp ? '90vw' : '100%',
        maxWidth: $vuetify.breakpoint.mdAndUp ? '1300px' : '400px'
      }"
      :sliderLineWidth="0"
      :handleSize="0"
      :leftImage="leftImage"
      :rightImage="rightImage"
      :sliderPositionPercentage="sliderPosition"
    />
    <br>
    <vue-typer class="headline" :repeat="0" text="Erika Lee"></vue-typer>
    <vue-typer
      :text="text1"
      :repeat="Infinity"
      :shuffle="false"
      initial-action="erasing"
      :pre-type-delay="70"
      :type-delay="70"
      :pre-erase-delay="2500"
      :erase-delay="150"
      erase-style="select-back"
      :erase-on-complete="false"
      caret-animation="smooth"
    ></vue-typer>
    <br>
    <v-flex xs12 sm6 md4 lg4 xl4>
      <v-card flat color="transparent" max-width="500">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">
              <span>About</span>
              <span class="teal--text"> Me</span>
            </h3>
            <div>
              <p>
                👋🏻 Hello! I’m Erika Lee, a master’s student in Information Management at UIUC focusing on
                <span class="teal--text font-weight-bold">Data Engineering and Data Science</span>.
                I enjoy turning complex datasets into meaningful solutions that make a real impact — like when I
                built and optimized data pipelines at Micron Technology to help tech teams speed up troubleshooting.<br>
                Outside of data and code, I’m a real explorer who's always looking for new experiences and challenges! 💖
              </p>
            </div>
          </div>
        </v-card-title>

        <v-card-actions class="hidden-sm-and-down justify-center">
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            fab
            dark
            outline
            color="teal"
            :href="icon.href"
            target="_blank"
          >
            <v-icon dark>{{ icon.icon }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-card-actions class="hidden-md-and-up justify-center">
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            small
            fab
            dark
            outline
            color="teal"
            :href="icon.href"
            target="_blank"
          >
            <v-icon dark>{{ icon.icon }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { VueTyper } from "vue-typer";
import VueCompareImage from "vue-compare-image";

export default {
  metaInfo: {
    title: "Home",
    titleTemplate: "%s | Erika's Data Travelogue",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: "Erika Lee's portfolio showcasing data engineering, data science, and backend development projects" },
      { charset: "utf-8" },
      { property: "og:title", content: "Erika's Data Travelogue" },
      { property: "og:site_name", content: "Erika's Data Travelogue" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://erikalee1217.github.io/" },
      { property: "og:image", content: "https://i.imgur.com/qH0HBjD.png" },
      { property: "og:description", content: "Erika Lee's portfolio showcasing data engineering, data science, and backend development projects" }
    ]
  },
  components: {
    "vue-typer": VueTyper,
    VueCompareImage
  },
  data() {
    return {
      icons: [
        { href: "https://github.com/erikalee1217", icon: "fab fa-github" },
        { href: "https://www.linkedin.com/in/i-hsuan-lee/", icon: "fab fa-linkedin-in" },
        { href: "https://erika-lee.medium.com/", icon: "fab fa-medium" },
        { href: "https://www.instagram.com/erika_lee1217/", icon: "fab fa-instagram" }
      ],
      text1: ["Data Engineer", "Data Scientist", "Backend Developer", "Curious Traveler"],
      leftImage: "https://i.imgur.com/GH26rsk.png",
      rightImage: "https://i.imgur.com/OjmNpOO.png",
      sliderLine: 0,
      hSize: 0,
      sliderPosition: 0.5
    };
  }
};
</script>

<style>
@keyframes rocking {
  0%,
  100% {
    transform: rotateZ(-10deg);
  }
  50% {
    transform: rotateZ(10deg);
  }
}

.vue-typer {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.vue-typer .custom.char.typed {
  color: teal;
}
.vue-typer .custom.char.selected {
  color: #424242;
}
.vue-typer .custom.caret {
  animation: rocking 1s ease-in-out 0s infinite;
}
.vue-typer .custom.caret.typing {
  background-color: teal;
}
.vue-typer .custom.caret.selecting {
  display: inline-block;
  background-color: #424242;
}

/* Hover effect for buttons */
.v-btn:hover {
  transform: scale(1.1);
  background-color: rgba(0, 128, 128, 0.1); /* Light teal background */
  transition: all 0.2s ease-in-out;
}
</style>
