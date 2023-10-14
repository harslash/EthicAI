<template>
  <div class="container module-overview-container">
    <div class="row">
        <div class="col-md-6 d-flex flex-column align-items-center justify-content-center">
          <div class="image">
            <img :src="require(`@/assets/${moduleImgFilename}`)" alt="image">
          </div>
          <div>
            <p class="module-name">{{ moduleTitle }}</p>
            <p class="module-desc">{{ moduleDescription }}</p>
          </div>
        </div>
        <div class="col-md-6 d-flex flex-column">
          <div class="top-child">
        <!-- Content for the top child container (70% height) -->
            <div class="module-structure">Module Structure</div>
            <ul class="contents">
              <li
                v-for="(item, index) in modulePageNames"
                :key="item"
              >
                <a href="javascript:void(0);" class="list-item" @click="handleListItemClick(index)" style="text-decoration: none;">
                  <span
                    :class="{ 'strikethrough': isPageVisted(index), 'non-strikethrough': !isPageVisted(index) }"
                  >{{ item }}</span>
                  <i
                    v-if="isPageVisted(index)"
                    class="fas fa-check-circle"
                    :style="{ color: '#6d0cff', transform: 'scale(1.2)' }"
                  ></i>
                  <i
                    v-else
                    class="far fa-circle"
                    :style="{ color: '#C324FF', transform: 'scale(1.2)' }"
                  ></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="bottom-child">
            <!-- Content for the bottom child container (30% height) -->
            <div class="row h-20">
              <div class="col-md-12 d-flex justify-content-end">
              <router-link :to="generateRoute(moduleName, pageName)">
                <purple-btn :text="'Continue'" @click="continueClicked" />
              </router-link>
              </div>
            </div>
          </div>
        </div>
    </div>

  </div>
</template>
<script lang="ts">
import { defineComponent} from 'vue';
import PurpleBtn from "../reusable-ui/purple-btn.vue";

export default defineComponent({
  name: 'ModuleOverview',
  props: {
    moduleTitle: String,
    moduleDescription: String,
    moduleImgFilename: String,
    modulePageNames: Array as () => string[],
    modulePageRoutes: Array as () => string[],
    moduleName: String,
    pageName: String,
  },
  data () {
    return {
      modulePageStates: [false]
    }
  },
  methods: {
    continueClicked() {
      // Handle the "Continue" button click event here
      // alert("Continue button clicked!");
    },
    generateRoute(moduleName: string | undefined, pageName: string | undefined) {
      // You can customize the route generation logic here
      // For example, you can append the routePath to an existing route
      return `/${moduleName}/${pageName}`;
    },
    handleListItemClick(index: number) {
      if (this.modulePageRoutes) {
          const pageName = this.modulePageRoutes[index]
          this.$router.push({ name: pageName });
      }
    },
    isPageVisted(index: number): boolean {
      return this.modulePageStates[index];
    },
    setModulePageStates() {
      if (this.modulePageRoutes) {
        const cookieValue = document.cookie
          .split('; ')
          .find((row) => row.startsWith(`${this.moduleName}ModuleState=`));

        if (cookieValue) {
          const storedArrayString = cookieValue.split('=')[1];
          const storedArray: object[] = JSON.parse(storedArrayString);

          //set the pages states accordingly
          storedArray.forEach((pageState, index) => {
            const pageStateKey = Object.keys(pageState)[0];
            const pageStateValue = Object.values(pageState)[0]
            this.modulePageStates[index] = pageStateValue
          })
        } else {
          //initialise all pages to be unvisted from the start
          this.modulePageStates = Array.from({ length: this.modulePageRoutes.length }, () => false);

          const moduleState: object[] = [];

          this.modulePageRoutes.forEach(route => {
            const stateObject: { [key: string]: boolean } = {};
            stateObject[route] = false;
            moduleState.push(stateObject);
          })

          const moduleStateString = JSON.stringify(moduleState);

          const expires = new Date();
          expires.setTime(expires.getTime() + 7 * 24 * 60 * 60 * 1000); // Cookie will expire in 7 days
          document.cookie = `${this.moduleName}ModuleState=${moduleStateString};expires=${expires.toUTCString()};path=/`;
        }
      }
    }
  },
  components: {
    "purple-btn": PurpleBtn,
  },
   mounted() {
    this.setModulePageStates();
  }
});
</script>

<style scoped>

@import "~@fortawesome/fontawesome-free/css/all.css";
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap');
/* Add your CSS styles here, scoped to this component */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  font-size: 20px;
}

.container {
  width: 80%;
  margin: 20px auto;
  border: 1px solid #000;
  padding: 20px;
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  align-items: stretch; /* Stretch containers to equal height */
}

.left-container,
.right-container {
  flex: 1; /* Equal width for both containers */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Push content to top and bottom */
  text-align: center;
}

.top-child {
  flex: 95; /* 70% height */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */
}

.bottom-child {
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Align content to the bottom */
  align-items: flex-end; /* Align content to the right */
  padding: 10px;
}

.module-name {
  font-weight: 700;
  font-family: 'Open Sans', sans-serif;
  font-size: 30px;
  text-align: center;
}

.module-structure {
  font-weight: 700;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  margin-bottom: 10px;
  margin-top: 20px;
  font-size: 20px;
}

.contents {
  margin: 20px;
  padding: 0;
  text-align: center;
  font-size: 15px;
}

.image img {
  width: 300px;
  height: 296px;
}

.module-desc {
  margin: 30px;
}

.contents li {
  list-style-type: circle;
  margin-bottom: 20px;
  margin-top: 20px;
  font-weight: bold;
}


.strikethrough {
  text-decoration: line-through;
  color: #6D0CFF;
}

.non-strikethrough {
  color: #C324FF;
}

.contents li {
  list-style-type: none; /* Remove list bullets */
  margin-bottom: 20px;
  margin-top: 20px;
  font-weight: bold;
}

.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px; /* Add padding to create space between text and icons */
  cursor: pointer;
}
.list-item:hover {
  background-color: #E5D1FF;
}

.list-item i {
  margin-left: 50px; /* Add left margin to icons to separate them from text */
}
</style>
