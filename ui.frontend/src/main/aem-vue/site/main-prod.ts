import "./main-prod.scss";
// import { createPinia } from 'pinia';
// import { useMainStore } from "../store";
import Login from "../components/login/main";
import ProductDetails from "../components/productDetails/productDetails.main";
import Registration from "../components/registration/registration.main";
import UserProfile from "../components/user-profile/profile.main";
import UserAddress from "../components/user-address/address.main";
import Cart from "../components/cart/cart.main";

const {createApp} = (window as any).Vue;
const {createPinia} = (window as any).Pinia;

// Create the Vue app
const app = createApp({
    components: {
        Login,
        Registration,
        ProductDetails,
        UserProfile,
        UserAddress,
        Cart
    }
});

// app.use(useMainStore);
// Mount the app to the element with the ID "app"
app.use(createPinia());
app.mount('#app');
