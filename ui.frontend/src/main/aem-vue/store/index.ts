// import { defineStore } from "pinia"; 
const { defineStore } = (window as any).Pinia;
import { ProductModel } from "../components/productDetails/productDetails.model";

export const useMainStore = defineStore('mainStore', {
    state: () => ({
        products: [],
        cart: [{"id":"341131", "qty": "2"}] as object[],
        loading: false,
        name: "Riaz"
    }),
    getters: {
        // Define getters here if needed
    },
    actions: {
        // Define actions here if needed
        addToCartFunc (this: ReturnType<any>, PDCode: any, productCount: ProductModel) {
            console.log(this.cart);
            localStorage.setItem("Cart_PD_ID", PDCode);
            const cartProduct = this.cart.find((product:any) => product.id === PDCode);
        
            if(cartProduct){
                cartProduct.qty = cartProduct.qty + productCount;
            }
            else{
                this.cart.push({
                    id: PDCode,
                    qty: productCount
                });
            }
        }
    }
});
