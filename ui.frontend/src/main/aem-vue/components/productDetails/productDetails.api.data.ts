import axios from 'axios';
import { getAccessToken } from 'src/main/aem-vue/service/token';

const PD_API_URL = 'https://spartacus-demo.eastus.cloudapp.azure.com:8443/occ/v2/electronics-spa/products/358639?fields=code,configurable,configuratorType,name,summary,price(formattedValue,DEFAULT),images(galleryIndex,FULL),baseProduct,averageRating,stock(DEFAULT),description,availableForPickup,url,numberOfReviews,manufacturer,categories(FULL),priceRange,multidimensional,tags&lang=en&curr=USD';
export const productDetail = async () => {
    const response = await axios.get(PD_API_URL, {
        headers: {
            'Authorization': `Bearer ${await getAccessToken()}`,
            'Content-Type': 'application/json'
        },
    });
    return response.data;
};

