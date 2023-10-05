import axios from 'axios';
import { ProductModel, Cart, entriesModel } from './cart.model';
import { getAccessToken } from 'src/main/aem-vue/service/token';

const CART_API_URL = 'https://spartacus-demo.eastus.cloudapp.azure.com:8443/occ/v2/electronics-spa/users';

// Check cart length
export const getCartLength = async (userID: string | null) => {
    const response = await axios.get(`${CART_API_URL}/${userID}/carts`, {
        headers: {
            'Authorization': `Bearer ${await getAccessToken()}`,
        },
    });
    return response.data;
};

// Generate new cart ID
export const getCartID = async (userID: string | null) => {
    const response = await axios.post(`${CART_API_URL}/${userID}/carts`,{}, {
        headers: {
            'Authorization': `Bearer ${await getAccessToken()}`,
        },
    });
    return response.data;
}

//addCartProduct
export const addCartProduct = async (userID: string | null, cartID: string | null, product : ProductModel ) => {
    const response = await axios.post(`${CART_API_URL}/${userID}/carts/${cartID}/entries`, product, {
        headers: {
            'Authorization': `Bearer ${await getAccessToken()}`,
        },
    });
    return response.data;
}

//getCartProducts
export const getCartProducts = async (userID: string | null, cartID: string | null) => {
    const response = await axios.get(`${CART_API_URL}/${userID}/carts/${cartID}?fields=DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,entries(totalPrice(formattedValue),product(images(FULL),stock(FULL)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue,%20value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue),user,saveTime,name,description&lang=en&curr=USD`, {
        headers: {
            'Authorization': `Bearer ${await getAccessToken()}`,
        },
    });
    const cart: Cart = {
        ...(response.data as Cart),
    };
    return response.data;
}

// Increase/Decrease Product
export const getUpdateCart  = async (userID: string | null, cartID: string | null, entryNo: number | null, updateQty: number | null) => {
    const response = await axios.patch(`${CART_API_URL}/${userID}/carts/${cartID}/entries/${entryNo}`, {quantity: updateQty}, {
        headers: {
            'Authorization': `Bearer ${await getAccessToken()}`,
        },
    });
    return response.data;
}

// Delete Product
export const deleteItem  = async (userID: string | null, cartID: string | null, entryNo: number | null) => {
    const response = await axios.delete(`${CART_API_URL}/${userID}/carts/${cartID}/entries/${entryNo}`, {
        headers: {
            'Authorization': `Bearer ${await getAccessToken()}`,
        },
    });
    return response.data;
}

// Delete Cart
export const deleteCart  = async (userID: string | null, cartID: string | null) => {
    const response = await axios.delete(`${CART_API_URL}/${userID}/carts/${cartID}`, {
        headers: {
            'Authorization': `Bearer ${await getAccessToken()}`,
        },
    });
    return response.data;
}