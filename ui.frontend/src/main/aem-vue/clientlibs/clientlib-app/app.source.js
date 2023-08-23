const {createApp} = Vue;

import HelloWorld from  "../../components/helloworld/main";
import Login from "../../components/login/main";

// Create the Vue app
const app = createApp({
    components: {
        HelloWorld,
        Login
    }
});

// Mount the app to the element with the ID "app"
app.mount('#app');
