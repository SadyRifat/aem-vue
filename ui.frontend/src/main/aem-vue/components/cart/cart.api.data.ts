import axios from 'axios';
import { ProductModel, entriesModel } from './cart.model';
import { getAccessToken } from 'src/main/aem-vue/service/token';

const CART_API_URL = 'https://spartacus-demo.eastus.cloudapp.azure.com:8443/occ/v2/electronics-spa/users';

export const getCartLength = async (userID: string | null) => {
    const response = await axios.get(CART_API_URL + "/" + userID + "/carts", {
        headers: {
            'Authorization': `Bearer ${await getAccessToken()}`,
        },
    });
    console.log(response.data);
    return response.data;
};

export const getCartID = async (userID: string | null) => {
    const response = await axios.post(CART_API_URL + "/" + userID + "/carts", "{}", {
        headers: {
            'Authorization': `Bearer ${await getAccessToken()}`,
        },
    });
    console.log(response.data);
    return response.data;
}

//addCartProduct
export const addCartProduct = async (userID: string | null, cartID: string | null, product : ProductModel ) => {
    console.log(userID , cartID);
    const response = await axios.post(CART_API_URL + "/" + userID + "/carts/" + cartID + '/entries', product, {
        headers: {
            'Authorization': `Bearer ${await getAccessToken()}`,
        },
    });
    //console.log(response.data);
    return response.data;
}

//getCartProducts
export const getCartProducts = async (userID: string | null, cartID: string | null) => {
    console.log('userID' + userID , 'cartID' + cartID);
    const response = await axios.get(CART_API_URL + "/" + userID + "/carts/" + cartID + '/entries', {
        headers: {
            'Authorization': `Bearer ${await getAccessToken()}`,
        },
    });
    //console.log(response.data);
    return response.data;
}
