<template>
  <v-layout row justify-center align-center wrap class="mt-4 pt-2">
    <v-flex xs12 sm12 md5 lg6 xl6 class="mt-4 pt-4">
      <h2 class="mb-4 pl-4 pt-2">Education</h2>
      <v-card-text class="py-0">
        <v-timeline align-top dense>
          <v-timeline-item color="#71bfbd" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold teal--text">AUG 2023 -</div>
                <div class="caption font-weight-bold teal--text">PRESENT</div>
              </v-flex>
              <v-flex xs12>
                <strong>MS in Information Management</strong>
                <div class="caption mb-2">University of Illinois at Urbana-Champaign, IL</div>
                <p class="caption">
                  Focused on Distributed Systems, Database Systems, Data Warehousing, Text Mining, and Statistical
                  Models. Gained hands-on experience on LLM tuning and RAG
                </p>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="#0097A7" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold teal--text">FEB 2022 -</div>
                <div class="caption font-weight-bold teal--text">AUG 2022</div>
              </v-flex>
              <v-flex xs12>
                <strong>Exchange Student in Business and Economics</strong>
                <div class="caption mb-2">KU Leuven, Belgium</div>
                <p class="caption">
                  Enhanced strategic problem-solving and presentation skills, reaching in the finalist (top 25%) at the Leuven Case
                  Competition and the 5th in Lotus Group case
                </p>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="#006064" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold teal--text">SEP 2017 -</div>
                <div class="caption font-weight-bold teal--text">Jun 2022</div>
              </v-flex>
              <v-flex xs12>
                <strong>BS in Information Management & Finance</strong>
                <div class="caption mb-2">National Yang Ming Chiao Tung University, Taiwan</div>
                <p class="caption">
                  Built a strong foundation in Data Structures, Algorithms, Data Mining, and Database Management, while
                  leading student initiatives as Vice President of the HSNU & ZSGH Alumni Association
                </p>
              </v-flex>
            </v-layout>
          </v-timeline-item>

        </v-timeline>
      </v-card-text>
    </v-flex>
    <v-flex xs12 sm12 md4 lg6 xl6 class="mt-4 pt-2">
    <h2 class="mb-4 pl-4">Experience</h2>
    <v-card-text class="py-0">
      <v-timeline align-top dense>
        <v-timeline-item color="#71bfbd" small>
          <v-layout pt-3>
            <v-flex xs4>
              <div class="caption font-weight-bold teal--text">Jul 2024 -</div>
              <div class="caption font-weight-bold teal--text">Aug 2024</div>
            </v-flex>
            <v-flex xs12>
              <strong>Data Engineer Intern</strong>
              <div class="caption mb-2">Micron Technology</div>
              <p class="caption">
                Developed an API with <b>FastAPI</b>, <b>Python</b> and <b>GKE</b>, cutting troubleshooting time by <b>20%
              </b>, and optimized <b>DBT</b> and <b>SQL ETL pipelines</b> with <b>CI/CD</b> for reliable data flows
              </p>
            </v-flex>
          </v-layout>
        </v-timeline-item>

        <v-timeline-item color="#0097A7" small>
          <v-layout pt-3>
            <v-flex xs4>
              <div class="caption font-weight-bold teal--text">Jan 2024 -</div>
              <div class="caption font-weight-bold teal--text">May 2024</div>
            </v-flex>
            <v-flex xs12>
              <strong>LLM Graduate Research Assistant</strong>
              <div class="caption mb-2">Amazon-Illinois AICE Center, UIUC</div>
              <p class="caption">
                Improved AI accuracy by <b>25%</b> with <b>RAG</b> and self-critique pipelines, and reduced processing
                time by <b>20%</b> using parallel computing on <b>Mixtral 7x8b</b> model
              </p>
            </v-flex>
          </v-layout>
        </v-timeline-item>

        <v-timeline-item color="#006064" small>
          <v-layout pt-3>
            <v-flex xs4>
              <div class="caption font-weight-bold teal--text">Sep 2019 -</div>
              <div class="caption font-weight-bold teal--text">Aug 2020</div>
            </v-flex>
            <v-flex xs12>
              <strong>Big Data Analytics Research Assistant</strong>
              <div class="caption mb-2">NYCU Center for Institutional Research</div>
              <p class="caption">
                Analyzed <b>1M records</b> with <b>Python</b> and <b>Pandas</b> for actionable insights, and increase
                the reporting generation speed by <b>30%</b> with <b>Tableau</b> dashboards
              </p>
            </v-flex>
          </v-layout>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
    </v-flex>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-flex xs12 sm12 md4 lg5 xl5 class="mx-4 pt-4">
        <h2>
          <span>Skills </span>
        </h2>
        <br>
        <strong>Programming</strong>
        <span> - Python, SQL</span>
        <strong class="right">5 years</strong>
        <v-progress-linear v-model="buffer1" :buffer-value="bufferValue" color="#71bfbd" height="16"></v-progress-linear>
        <strong>Databases</strong>
        <span> - MySQL, PostgreSQL </span>
        <strong class="right">3 years</strong>
        <v-progress-linear v-model="buffer2" :buffer-value="bufferValue" color="#71bfbd" height="16"></v-progress-linear>
        <strong>Cloud & Big Data</strong>
        <span> - GCP, AWS, Docker, Kubernetes, Airflow, Kafka</span>
        <strong class="right">2 years</strong>
        <v-progress-linear v-model="buffer3" :buffer-value="bufferValue" color="#71bfbd" height="16"></v-progress-linear>
      </v-flex>
      <v-flex xs12 sm12 md4 lg5 xl5 class="mx-4 pt-4">
        <h2>
          <span><br></span>
        </h2>
        <br>
        <strong>ML & Stats</strong>
        <span> - Scikit-learn, Regression, Classification</span>
        <strong class="right">4 years</strong>
        <v-progress-linear v-model="buffer4" :buffer-value="bufferValue" color="#71bfbd" height="16"></v-progress-linear>
        <strong>Development Tools</strong>
        <span> - Git, RESTful API, Node.js</span>
        <strong class="right">3 years</strong>
        <v-progress-linear v-model="buffer5" :buffer-value="bufferValue" color="#71bfbd" height="16"></v-progress-linear>
        <strong>Data Visualization & Analytics</strong>
        <span> - Tableau, PowerBI, Excel</span>
        <strong class="right">3 years</strong>
        <v-progress-linear v-model="buffer6" :buffer-value="bufferValue" color="#71bfbd" height="16"></v-progress-linear>
      </v-flex>
      <div class="mt-4 pt-2">
        <v-btn
          href="https://drive.google.com/file/d/1kRHvJJijzIud0yVFdhoe7lTkJboMqH4T/view?usp=sharing"
          target="_blank"
          color="#71bfbd"
          dark
          large
        >
          Download Resume
          <v-icon right dark>fas fa-file-download</v-icon>
        </v-btn>
      </div>
    </v-layout>
  </v-layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Resume",
    titleTemplate: "%s | Erika's Data Travelogue",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Vue NUXT HTML CSS JavaScript Design Adobe XD Photoshop Coding Skills Resume Work Web Developer Front-End"
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
          "Vue NUXT HTML CSS JavaScript Design Adobe XD Photoshop Coding Skills Resume Work Web Developer Front-End"
      }
    ]
  },
  data() {
    return {
      value: 0,
      buffer1: 0,
      buffer2: 0,
      buffer3: 0,
      buffer4: 0,
      buffer5: 0,
      buffer6: 0,
      bufferValue: 100,
      interval: 0
    };
  },
  mounted() {
    this.startBuffer();
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  methods: {
    startBuffer() {
      this.interval = setInterval(() => {
        this.buffer1 = 95;
        this.buffer2 = 80;
        this.buffer3 = 65;
        this.buffer4 = 85;
        this.buffer5 = 75;
        this.buffer6 = 75;
      }, 800);
    }
  }
};
</script>
<style >
</style>

