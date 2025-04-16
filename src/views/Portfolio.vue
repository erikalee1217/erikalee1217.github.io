<template>
  <v-container grid-list-xl>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-dialog
        v-model="project.dialog"
        lazy
        max-width="1000"
        v-for="project in projects"
        :key="project.title"
      >
        <template v-slot:activator="{ on }">
          <v-flex xs12 sm6 md4 lg4 xl4 v-on="on">
            <v-card hover flat color="transparent">
              <v-img
                :src="project.poster"
                :alt="project.title"
                height="230"
                lazy-src="https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif"
              ></v-img>
              <v-card-title primary-title class="justify-center">{{project.title}}</v-card-title>
              <v-chip small color="teal lighten-1" text-color="white">{{project.tech.tech1}}</v-chip>
              <v-chip small color="teal lighten-1" text-color="white">{{project.tech.tech2}}</v-chip>
            </v-card>
          </v-flex>
        </template>
        <v-card v-if="project.dialog">
          <v-img :src="project.poster"></v-img>
          <v-card-text>
            <h3 class="f-headline-l mb-1">
              <span>{{project.title}}</span>
            </h3>
            <p>{{project.description}}</p>
            <v-chip color="teal" text-color="white">{{project.tech.tech1}}</v-chip>
            <v-chip color="teal" text-color="white">{{project.tech.tech2}}</v-chip>
            <v-chip color="teal" text-color="white">{{project.tech.tech3}}</v-chip>
            <v-chip color="teal" text-color="white">{{project.tech.tech4}}</v-chip>
          </v-card-text>
          <v-card-actions>
            <v-btn v-if="project.git" flat large dark color="teal" :href="project.git" target="_blank">
              <v-icon left>fab fa-github</v-icon>GitHub
            </v-btn>
            <v-btn v-if="project.demo" large flat dark color="teal" :href="project.demo" target="_blank">
              <v-icon left>fas fa-desktop</v-icon>Demo
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  metaInfo: {
    title: "Portfolio",
    titleTemplate: "%s | Erika's Data Travelogue",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Erika's Portfolio"
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
          "Erika's Portfolio"
      }
    ]
  },
  data() {
    return {
      dialog: false,
      projects: [
         {
          dialog: false,
          title: "Unlost: A companion in Letters (Ongoing Project)",
          git: "",
          demo: "",
          description: "This ongoing project explores a gentle AI that reads your journal and writes back like a " +
            "thoughtful pen pal. It offers a non-judgmental, structured diary experience with delayed responses to " +
            "mirror the rhythm of handwritten exchanges. Built with React, Node.js, and MongoDB, it uses LLMs to foster " +
            "emotional connection, privacy, and safe expression—ideal for those who prefer reflection over real-time " +
            "chat 💌",
          tech: {
            tech1: "React",
            tech2: "Node.js",
            tech3: "MongoDB",
            tech4: "Prompt Engineering"
          },
          poster: "https://i.imgur.com/0TPahxo.png"
        },
        {
          dialog: false,
          title: "EMA - API Development & Enhancement",
          description:"Built and optimized internal APIs to support equipment data monitoring workflows at Micron. " +
            "Designed and deployed a FastAPI-based service integrated with DBT and Google Kubernetes Engine(GKE), " +
            "enabling scalable matching of equipment constants and improving troubleshooting efficiency by 20%. " +
            "Enhanced existing APIs with pagination and validation logic, and developed robust CI/CD pipelines to ensure " +
            "reliable data delivery",
          tech: {
            tech1: "FastAPI",
            tech2: "API Development",
            tech3: "DBT",
            tech4: "CI/CD"
          },
          poster: "https://i.imgur.com/x39dZGm.png"
        },
        {
          dialog: false,
          title: "Vocabuddy: GRE/TOEFL Vocabulary App",
          git: "https://github.com/erikalee1217/Vocabuddy.git",
          demo: "https://www.brandly.com/",
          description: "This project is a web-based vocabulary builder app for standardized test prep. Designed and " +
            "optimized RESTful APIs using Node.js and Express, and created a normalized MySQL database schema, " +
            "reducing SQL query costs by up to 50% through indexing. Contributed to the backend development and " +
            "deployed the app on Google Cloud Platform for scalability. The app tracks progress and offers personalized " +
            "recommendations, enhancing user engagement.",
          tech: {
            tech1: "Node.js",
            tech2: "MySQL",
            tech3: "GCP",
            tech4: "React"
          },
          poster: "https://i.imgur.com/mlzoK29.png"
        },
        {
          dialog: false,
          title: "Precision Enrollment Dashboard",
          git: "",
          demo: "",
          description: "Built an interactive dashboard in Tableau to visualize enrollment data across departments and " +
            "regions, helping school administrators make data-informed decisions. Using CSV data sources, the project " +
            "highlights admission trends and delivers actionable insights tailored to institutional goals.",
          tech: {
            tech1: "Tableau",
            tech2: "Data Visualization",
            tech3: "CSV",
            tech4: "Dashboards"
          },
          poster: "https://i.imgur.com/BaxKCOl.png"
        },
        {
          dialog: false,
          title: "LLM Conversational AI Research - RAG",
          description: "This project focuses on improving the alignment and helpfulness of Large Language Models (LLMs) " +
            "through Retrieval-Augmented Generation (RAG) and Reinforcement Learning from AI Feedback (RLAIF). As part " +
            "of a research collaboration at the Amazon–Illinois AICE Center, I contributed to experiments on " +
            "self-critiquing feedback loops and reward modeling techniques. The research explores methods like DPO and " +
            "process supervision to refine model behavior",
          tech: {
            tech1: "Large Language Model",
            tech2: "RAG",
            tech3: "Reinforcement Learning",
            tech4: "Self Critique"
          },
          poster: "https://i.imgur.com/zvWjO13.png"
        },
        {
          dialog: false,
          title: "Real-Time Earthquake Detection System",
          description: "This project combines official seismic alerts from Taiwan’s Central Weather Administration (CWA)" +
            " with real-time social signals from YouTube live chat to enable faster earthquake awareness. I built modular " +
            "ETL pipelines using Airflow and Kafka to reliably process streaming data, and deployed the system with a " +
            "containerized architecture using PostgreSQL and Docker",
          git: "",
          tech: {
            tech1: "ETL Pipeline",
            tech2: "Apache Airflow",
            tech3: "PostgreSQL",
            tech4: "Apache Kafka"
          },
          poster: "https://i.imgur.com/FYHWOWZ.png"
        },
        {
          dialog: false,
          title: "Changhua Hospital Waiting Time Prediction",
          git: "",
          description: "This project predicts hospital consultation and waiting times using Stochastic Gradient Descent " +
            "and Random Forest, based on 10 months of Changhua Hospital data. It models factors such as diagnosis and " +
            "physician type to improve patient experience and operational efficiency. The workflow includes data " +
            "cleaning, mean encoding, and Stratified K-Fold validation, demonstrating practical machine learning skills " +
            "applied to real-world healthcare resource optimization.",
          demo: "https://drive.google.com/file/d/1FcIf3web9K7i_yMfI0-U1cIt8i96tZjP/view",
          tech: {
            tech1: "Stochastic Gradient Descent",
            tech2: "Random Forest",
            tech3: "Data PreProcessing",
            tech4: "Cross Validation"
          },
          poster: "https://i.imgur.com/XB1HGGo.png"
        },
        {
          dialog: false,
          title: "Game Theory: COVID-19 Market Simulation",
          demo: "https://drive.google.com/file/d/1FwFzXezo1-CHujutmafbmZLfMrfOONVL/view?usp=sharing",
          description: "This project applies game theory to analyze how COVID-19 reshaped market behavior in Taiwan. " +
            "We examined how vendors adapted pricing strategies amid rising costs, analyzed competitive dynamics between " +
            "Ubereats and Foodpanda, and evaluated changes in logistics route decisions under pandemic traffic " +
            "restrictions. Using concepts like Nash equilibrium and network analysis, the project modeled adaptive " +
            "behavior under uncertainty in real-world economic systems.",
          tech: {
            tech1: "Game Theory",
            tech2: "Nash Equilibrium",
            tech3: "Network Analysis",
            tech4: "Economic Modeling"
          },
          poster: "https://i.imgur.com/zb6IkPh.png"
        },
        {
          dialog: false,
          title: "Air Quality & Health Impact Forecasting",
          demo: "https://drive.google.com/file/d/1GRsegD57M6U4RKCOlh8oohCGbBmXwGf5/view?usp=sharing",
          description: "This project analyzes PM2.5/PM10 air quality and related health risks in Hsinchu. It integrates " +
            "air and weather data across seasons, applies deep learning models (CNN, LSTM) to predict PM2.5 levels, and " +
            "uses Google Trends to correlate public search behavior with pollution severity. The project explores how " +
            "environmental data and public health concerns intersect to guide preventive action.",
          tech: {
            tech1: "Data Visualization",
            tech2: "Statistical Analysis",
            tech3: "CNN/LSTM",
            tech4: "Google Trends"
          },
          poster: "https://i.imgur.com/tIyHsIs.png"
        }
      ]
    };
  }
};
</script>

<style  scoped>
</style>
