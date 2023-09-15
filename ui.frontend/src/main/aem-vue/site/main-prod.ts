import "./main-prod.scss";
import HelloWorld from "../components/helloworld/main";
import Login from "../components/login/main";
import AppStore from "../store";
import Registration from "../components/registration/registration.main";

const {createApp} = (window as any).Vue;

// Create the Vue app
const app = createApp({
    components: {
        HelloWorld,
        Login,
        Registration
    }
});

app.use(AppStore);
// Mount the app to the element with the ID "app"
app.mount('#app');
