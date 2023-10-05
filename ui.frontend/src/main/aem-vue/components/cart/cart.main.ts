import CartTemplate from './cart.template';
import {cartDetailsModel, ProductModel, entriesModel} from './cart.model';
import { useMainStore } from "../../store/index";
//import {addCartProduct, getCartProducts} from "./cart.api.data";
import * as cartAction from './cart.api.data';
import { number } from 'yup';

const {defineComponent} = (window as any).Vue;
const {ref} = (window as any).Vue;

const Cart = defineComponent({
    template: CartTemplate.template, props: {
        modelData: Object
    }, setup() {
        const cartStore = useMainStore()
        const currProductID = ref('');
        const currentCartID = ref('');
        const currentProductQty = ref('');
        const qtyNumber = ref('');
        const cartProducts : number[] = [];
        const currentUserID = localStorage.getItem("currentUserID");
        const cartData = ref([]);
        const cartLength = ref('0');
        
        const domainUrl = "https://spartacus-demo.eastus.cloudapp.azure.com:8443/";
        
        const getNewCart = async (id:string | null) => {
            const cartID = await cartAction.getCartID(id);
            //localStorage.setItem("Current_Cart_ID", cartID.code);
            return cartID.code;
        }

        const addProductToCart = async (UID:string | null, CID:string | null, product: ProductModel) => {
            const addProduct = await cartAction.addCartProduct(UID, CID, product);
            cartProducts.push(addProduct.entry.product);
            return cartProducts;
        }
        
        cartStore.$subscribe( async() => {
            currProductID.value = cartStore.cart[0].id;

            const getCartIDResponse = await cartAction.getCartLength(currentUserID);
            cartLength.value = getCartIDResponse.carts.length;
            if(cartLength.value == 0){
                try {
                    getNewCart(currentUserID);
                } catch(e) {
                    console.log(e);
                }
            }
            else{
                
                currentCartID.value = localStorage.getItem("Current_Cart_ID");
                qtyNumber.value = cartStore.cart[0].qty;
                const productInstance = new ProductModel(qtyNumber.value, currProductID.value);
                addProductToCart(currentUserID, currentCartID.value, productInstance);
            }
        })

        const cartDetailsInfo = async () => {
            currentCartID.value = localStorage.getItem("Current_Cart_ID");
            const cartResponse = await cartAction.getCartProducts(currentUserID, currentCartID.value);
            cartData.value = cartResponse;
        };

        const updateProductCount:any = async (UID:string | null, CID:string | null, entryNo: number | null, itemQty: number, eventType: string | null) => {
            if(eventType === 'decrease'){
                currentProductQty.value = itemQty - 1;
            }
            else if(eventType === 'insert'){
                currentProductQty.value = itemQty;
            }
            else if(eventType === 'increase'){
                currentProductQty.value = itemQty + 1;
            }
            const UpdateCartData = await cartAction.getUpdateCart(UID, CID, entryNo,  currentProductQty.value);
            cartDetailsInfo();
        };

        const deleteProductItem:any = async (UID:string | null, CID:string | null, entryNo: number | null) => {
            const UpdateCartData = await cartAction.deleteItem(UID, CID, entryNo);
        };
        
        const deleteCart:any = async (UID:string | null, CID:string | null) => {
            const UpdateCartData = await cartAction.deleteCart(UID, CID);
        };
         
        return { currentUserID, currentCartID, currProductID, cartProducts, qtyNumber, cartLength, cartData, domainUrl, cartDetailsInfo, updateProductCount, deleteProductItem };
    },
    mounted() {
        this.cartDetailsInfo();
    }
});

export default Cart;
