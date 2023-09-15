import axios from 'axios';
import {FormModel, UserRegistrationModel} from "./registration.model";
import {doAnonymousAccess} from "../../external/hybris/auth/auth";

const USER_REGISTRATION_API_URL = 'https://spartacus-demo.eastus.cloudapp.azure.com:8443/occ/v2/electronics-spa/users?lang=en&curr=USD';

export const userRegistration = async (formData: FormModel) => {
    const registrationBody: UserRegistrationModel = {
        firstName: formData.firstName,
        lastName : formData.lastName,
        password: formData.password,
        titleCode: formData.title,
        uid: formData.email,
    };
    const tokenResponse = await doAnonymousAccess();
    const response = await axios.post(USER_REGISTRATION_API_URL, registrationBody, {
        headers: {
            'Authorization': `Bearer ${tokenResponse.access_token}`,
        },
    });
    return response.data;
};
