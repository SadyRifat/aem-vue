import CartTemplate from './cart.template';
import {cartDetailsModel, ProductModel, entriesModel} from './cart.model';
import { useMainStore } from "../../store/index";
//import {addCartProduct, getCartProducts} from "./cart.api.data";
import * as cartAction from './cart.api.data';

const {defineComponent} = (window as any).Vue;
const {ref} = (window as any).Vue;

const Cart = defineComponent({
    template: CartTemplate.template, props: {
        modelData: Object
    }, setup() {
        const cartStore = useMainStore()
        const currProductID = ref('');
        const currentCartID = ref('');
        const qtyNumber = ref('');
        const cartProducts : number[] = [];
        const currentUserID = localStorage.getItem("currentUserID");

        const cartData = ref('');
        const cartPDName = ref('');
        const cartPDID = ref('');
        const cartPDPrice = ref('');
        const cartPDTotal = ref('');
        const cartPDQty = ref('0');
        const cartLength = ref('0');

        // const cartDetailsExistingcart = async () => {
        //     const cartResponse = await cartAction.getCartLength(currentUserID);
        //     // cartData.value = cartResponse;
        //     // cartPDName.value = cartResponse.product.name;
        //     // cartPDID.value = cartResponse.product.code;
        //     // cartPDTotal.value = cartResponse.totalPrice.value;
        //     //console.log(cartResponse);
        //     cartLength.value = cartResponse.carts.length;
        //     if(cartLength.value != 0){
        //         cartResponse.carts.map(async (item:any) => {
        //             console.log(item.code);
        //         });
        //     }
        // };

        const getNewCart = async (id:string | null) => {
            const cartID = await cartAction.getCartID(id);
            console.log('cartID' + cartID.code);
            //localStorage.setItem("Current_Cart_ID", cartID.code);
            return cartID.code;
        }

        const addProductToCart = async (UID:string | null, CID:string | null, product: ProductModel) => {
            const addProduct = await cartAction.addCartProduct(UID, CID, product);
            cartProducts.push(addProduct.entry.product);
            console.log(cartProducts);
            qtyNumber.value = 10;
            return cartProducts;
        }
        
        cartStore.$subscribe( async() => {
            console.log('store updated');
            console.log('currentUserID' + currentUserID);
            
            currProductID.value = cartStore.cart[0].id;
            console.log('currProductID' + currProductID.value);

            const getCartIDResponse = await cartAction.getCartLength(currentUserID);
            cartLength.value = getCartIDResponse.carts.length;
            if(cartLength.value == 0){
                try {
                    getNewCart(currentUserID);
                    console.log('has no cart length');
                } catch(e) {
                    console.log(e);
                }
            }
            else{
                
                currentCartID.value = localStorage.getItem("Current_Cart_ID");
                console.log('has cart length and '+ currentCartID.value);
                const productInstance = new ProductModel(1, currProductID.value);
                addProductToCart(currentUserID, currentCartID.value, productInstance);
                //console.log(cartProducts);
            }
        })

        const cartDetailsInfo = async () => {
            currentCartID.value = localStorage.getItem("Current_Cart_ID");
            const cartResponse = await cartAction.getCartProducts(currentUserID, currentCartID.value);
            cartData.value = cartResponse;
            console.log(cartResponse);
            cartPDName.value = cartResponse.orderEntries[0].product.name;
            cartPDID.value = cartResponse.orderEntries[0].product.code;
            cartPDQty.value = cartResponse.orderEntries[0].quantity;
            cartPDTotal.value = cartResponse.orderEntries[0].totalPrice.value;
            console.log('from mian' + cartPDName.value, cartPDID.value);
        };
         
        return { currentCartID, currProductID, cartProducts, qtyNumber, cartLength, cartPDName, cartPDID, cartPDTotal, cartPDQty, cartDetailsInfo };
    },
    mounted() {
        this.cartDetailsInfo();
    }
});

export default Cart;
