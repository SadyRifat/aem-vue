import CartTemplate from './cart.template';
import AppStore from "../../store";
import {cart} from "./cart.api.data";
import {CartModel} from './cart.model';

const {ref, watchEffect} = (window as any).Vue;
const {defineComponent} = (window as any).Vue;

const Cart = defineComponent({
    template: CartTemplate.template, props: {
        modelData: Object
    }, setup() {
        
        return {};
    },
    methods: {
        // addToCartFunc({PDCode, productCount}:ProductModel){
        //     // localStorage.setItem("Cart_PD_ID", PDCode);
        //     // localStorage.setItem("Cart_PD_Count", productCount);
        //     AppStore.dispatch('addToCart', {PDCode, productCount});
        //     console.log({PDCode, productCount});
        // }
    },
    mounted() {
        //this.productDetailsInfo();
    },
    computed: {
        updateCart() {
            const handleCartUpdate = () => {
                console.log('Cart items have been updated:');
                // Perform any other actions you want here
            };
            // Use watchEffect to run handleCartUpdate whenever cartItems changes
            watchEffect(() => handleCartUpdate());
            return AppStore.state.cart[1].qty;
        },
    }
});

export default Cart;
