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
}

export const ADDTOCART = (state: { cart: any}, productID: number, PDCount: number) => {

    //find the product in the products list
    //const product = state.products.find((product:any) => product.id === productID);
    console.log('productCount store' + PDCount);
    //find the product in the cart list
    const cartProduct = state.cart.find((product:any) => product.id === productID)

    if(cartProduct){
        cartProduct.qty++;
    }
    else{
        state.cart.push({
            id: productID,
            qty: 1
        })
        console.log('cart' + state.cart);
    }
}
