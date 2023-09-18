import axios from 'axios';
import {ProfileModel, UserProfileModel} from "./profile.model";
import {getAccessToken} from "../../service/token";

const USER_PROFILE_API_URL = 'https://spartacus-demo.eastus.cloudapp.azure.com:8443/occ/v2/electronics-spa/users/current?lang=en&curr=USD';

export const getUserProfile = async () => {
    const response = await axios.get(USER_PROFILE_API_URL, {
        headers: {
            'Authorization': `Bearer ${await getAccessToken()}`,
        },
    });
    return response.data;
};

export const updateUserProfile = async (profileData: ProfileModel) => {
    const profileBody: UserProfileModel = {
        titleCode: profileData.titleCode,
        firstName: profileData.firstName,
        lastName : profileData.lastName,
        customerId: profileData.customerId
    };
    const response = await axios.patch(USER_PROFILE_API_URL, profileBody, {
        headers: {
            'Authorization': `Bearer ${await getAccessToken()}`,
        },
    });
    return response.data;
};

