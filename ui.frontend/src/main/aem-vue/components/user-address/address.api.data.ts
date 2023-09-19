import axios from 'axios';
import {AddressModel} from "./address.model";
import {getAccessToken} from "../../service/token";

const USER_ADDRESS_API_URL = 'https://spartacus-demo.eastus.cloudapp.azure.com:8443/occ/v2/electronics-spa/users/current/addresses';

export const getUserAddress = async (id: string) => {
    const response = await axios.get(USER_ADDRESS_API_URL + "/" + id, {
        headers: {
            'Authorization': `Bearer ${await getAccessToken()}`,
        },
    });
    return response.data;
};

export const getUserAddressList = async () => {
    const response = await axios.get(USER_ADDRESS_API_URL, {
        headers: {
            'Authorization': `Bearer ${await getAccessToken()}`,
        },
    });
    return response.data;
};

export const postUserAddress = async (requestBody: AddressModel) => {
    const response = await axios.post(USER_ADDRESS_API_URL, requestBody, {
        headers: {
            'Authorization': `Bearer ${await getAccessToken()}`,
        },
    });
    return response.data;
};

export const patchUserAddress = async (requestBody: AddressModel) => {
    const response = await axios.patch(USER_ADDRESS_API_URL + "/" + requestBody.id, requestBody, {
        headers: {
            'Authorization': `Bearer ${await getAccessToken()}`,
        },
    });
    return response.data;
};

export const deleteUserAddress = async (id: string) => {
    const response = await axios.delete(USER_ADDRESS_API_URL + "/" + id, {
        headers: {
            'Authorization': `Bearer ${await getAccessToken()}`,
        },
    });
    return response.data;
};

