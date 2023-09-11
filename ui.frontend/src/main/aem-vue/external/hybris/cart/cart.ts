import axios from 'axios';
import {getAccessToken} from "../../../service/token";

const CART_API_URL = 'https://spartacus-demo.eastus.cloudapp.azure.com:8443/occ/v2/electronics-spa/users/current/carts/00002022?fields=DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,entries(totalPrice(formattedValue),product(images(FULL),stock(FULL)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue,%20value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue),user,saveTime,name,description&lang=en&curr=USD';

export const userCartItem = async () => {
    const response = await axios.get(CART_API_URL, {
        headers: {
            'Authorization': `Bearer ${await getAccessToken()}`,
        },
    });
    return response.data;
};
