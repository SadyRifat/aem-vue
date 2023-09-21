import "./main-prod.scss";
import HelloWorld from "../components/helloworld/main";
import Login from "../components/login/main";
import Counter from "../components/counter/main";
import ProductDetails from "../components/productDetails/productDetails.main";
import AppStore from "../store";
import Registration from "../components/registration/registration.main";
import UserProfile from "../components/user-profile/profile.main";
import UserAddress from "../components/user-address/address.main";

const {createApp} = (window as any).Vue;

// Create the Vue app
const app = createApp({
    components: {
        HelloWorld,
        Login,
        Counter,
        Registration,
        ProductDetails,
        UserProfile,
        UserAddress
    }
});

app.use(AppStore);
// Mount the app to the element with the ID "app"
app.mount('#app');
