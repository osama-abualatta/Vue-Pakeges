import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import Router from "vue-router";
import router from "./router";
import store from "./store";
import "./component";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import VueToast from "vue-toast-notification";
import VueToasted from "vue-toasted";
import VueTour from "vue-tour";
import SmartTable from "vuejs-smart-table";
import VueTimepicker from "vue2-timepicker";
import FlagIcon from "vue-flag-icon";
import i18n from "./i18n";
import VueLazyload from "vue-lazyload";
import Meta from "vue-meta";
import VueMoment from "vue-moment";
//import moment from 'moment-timezone'
import VueQuill from "vue-quill";
require("./animate.css");
// import VueToastr, { Toastr, Toast, ToastProgress } from "../src/index";
import VueToastr from "vue-toastr";
import Vuelidate from "vuelidate";
 import "./assets/pp.scss";



require("vue-tour/dist/vue-tour.css");

const options = {
  confirmButtonColor: "#41b882",
  cancelButtonColor: "#ff7674",
};

Vue.use(VueSweetalert2, options);
Vue.use(VueToast);
Vue.use(VueToasted, {
  iconPack: "material", // set your iconPack, defaults to material. material|fontawesome|custom-class
});
Vue.use(VueTour);
Vue.use(SmartTable);
Vue.use(VueTimepicker);
Vue.use(FlagIcon);
Vue.use(VueLazyload);
Vue.use(Router);
Vue.use(Meta, {
  keyName: "metaInfo",
  attribute: "data-vue-meta",
  ssrAttribute: "data-vue-meta-server-rendered",
  tagIDKeyName: "vmid",
  refreshOnceOnNavigation: true,
});
Vue.use(VueMoment);
Vue.use(VueQuill);
Vue.use(VueToastr);
Vue.use(Vuelidate);
Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
