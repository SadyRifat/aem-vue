const {createApp} = Vue;

import HelloWorld from  "../../components/helloworld/main";

// Create the Vue app
const app = createApp({
    components: {
        HelloWorld
    }
});

// Mount the app to the element with the ID "app"
app.mount('#app');
