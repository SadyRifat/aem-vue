import { ProductModel } from "../../components/productDetails/productDetails.model";

export const INCREMENT = (state: { count: number }) => {
    state.count++;
};

export const RESET = (state: { count: number }) => {
    state.count = 1;
};

export const INCREMENTVAL = (state: { counterVal: number}) => {
    state.counterVal++;
};

export const DECREMENTVAL = (state: { counterVal: number}) => {
    state.counterVal--;
};

export const ADDTOCART = (state: { cart: any}, {PDCode, productCount}: ProductModel) => {

    console.log('store count ' + productCount);
    console.log('store ID ' + PDCode);
    const cartProduct = state.cart.find((product:any) => product.id === PDCode);

    if(cartProduct){
        cartProduct.qty = cartProduct.qty + productCount;
        console.log(cartProduct.qty);
    }
    else{
        state.cart.push({
            id: PDCode,
            qty: productCount
        });
        console.log('cart' + state.cart);
    }
};
