import HelloTemplate from './template';
import AppStore from "../../store";
import {userCartItem} from "../../external/hybris/cart/cart";

const {ref} = (window as any).Vue;
const {defineComponent} = (window as any).Vue;

export default defineComponent({
    template: HelloTemplate.template, props: {
        modelData: String
    }, setup() {
        const cartList = ref([]);
        const grandTotal = ref('0.0');
        const getCartItem = async () => {
            const cartResponse = await userCartItem();
            console.log("Cart Response: " + cartResponse);
            cartList.value = cartResponse.entries;
            grandTotal.value = cartResponse.totalPriceWithTax.formattedValue;
        };
        return {cartList, grandTotal, getCartItem};
    }, mounted() {
        this.getCartItem();
    }, computed: {
        countNow() {
            return AppStore.getters.getCount;
        }
    }
});
