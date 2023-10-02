// import { defineStore } from "pinia"; 
const { defineStore } = (window as any).Pinia;
import { ProductModel } from "../components/productDetails/productDetails.model";

export const useMainStore = defineStore('mainStore', {
    state: () => ({
        products: [],
        cart: [] as object[],
        loading: false,
        name: "Riaz"
    }),
    getters: {
        // Define getters here if needed
    },
    actions: {
        // Define actions here if needed
        addToCartFunc (this: ReturnType<any>, PDCode: any, productCount: ProductModel) {
            //localStorage.setItem("Cart_PD_ID", PDCode);
            const cartProduct = this.cart.find((product:any) => product.id === PDCode);
            
            if(cartProduct){
                cartProduct.qty = cartProduct.qty + productCount;
                console.log(this.cart);
            }
            else{
                this.cart.push({
                    id: PDCode,
                    qty: productCount
                });
                console.log(this.cart);
            }
        }
    }
});
