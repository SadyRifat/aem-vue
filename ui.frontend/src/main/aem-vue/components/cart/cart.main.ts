import CartTemplate from './cart.template';
import {CartModel} from './cart.model';
import { useMainStore } from "../../store/index";
const {defineComponent} = (window as any).Vue;
const {ref} = (window as any).Vue;

const Cart = defineComponent({
    template: CartTemplate.template, props: {
        modelData: Object
    }, setup() {
        
        //return {};
        const cartStore = useMainStore()

        // this subscription will be kept even after the component is unmounted
        const abc = "231321";
        const currProductID = ref('');
        let cartWatch = '';
        cartWatch = cartStore.$subscribe(() => {
            console.log('store updated');
            currProductID.value = cartStore.cart[1].id;
            console.log(currProductID);
            //const PD_API_URL = 'https://spartacus-demo.eastus.cloudapp.azure.com:8443/occ/v2/electronics-spa/products/'+{{currProductID}:any} + '?fields=code,configurable,configuratorType,name,summary,price(formattedValue,DEFAULT),images(galleryIndex,FULL),baseProduct,averageRating,stock(DEFAULT),description,availableForPickup,url,numberOfReviews,manufacturer,categories(FULL),priceRange,multidimensional,tags&lang=en&curr=USD';
            //console.log(PD_API_URL);
            //return currProductID;
        })

        return { abc, currProductID };
    },
    mounted() {
        this.cartWatch();
    }
});

export default Cart;
