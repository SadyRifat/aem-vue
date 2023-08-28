const {createApp} = Vue;
const {createStore} = Vuex;

import HelloWorld from  "../../components/helloworld/main";
import Login from "../../components/login/main";
import AppStore from "../../store/index"

// Create the Vue app
const app = createApp({
    components: {
        HelloWorld,
        Login
    }
});

const store = createStore(AppStore);
app.use(store);

// Mount the app to the element with the ID "app"
app.mount('#app');
