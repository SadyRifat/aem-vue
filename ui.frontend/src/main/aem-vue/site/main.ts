import "./main.scss"
import HelloWorld from "../components/helloworld/main";
import Login from "../components/login/main";
import Counter from "../components/counter/main";
import AppStore from "../store";

const {createApp} = (window as any).Vue;

// Create the Vue app
const app = createApp({
    components: {
        HelloWorld,
        Login,
        Counter
    }
});

app.use(AppStore);
// Mount the app to the element with the ID "app"
app.mount('#app');
