import axios from 'axios';
import {getAccessToken} from "../../../service/token";

const PD_API_URL = 'https://spartacus-demo.eastus.cloudapp.azure.com:8443/occ/v2/electronics-spa/products/779841?fields=DEFAULT';

export const productDetail = async () => {
    const response = await axios.get(PD_API_URL, {
        headers: {
            'Authorization': `Bearer ${await getAccessToken()}`,
            'Content-Type': 'application/json'
        },
    });
    return response.data;
};
