import {doAnonymousAccess, doLoginRequestByRefresh} from "../external/hybris/auth/auth";

export const getLocalTokenResponse = () => {
    const tokenResponse = localStorage.getItem('hbk-auth');
    return tokenResponse ? JSON.parse(tokenResponse) : null;
};

export const clearTokenResponse = () => {
    localStorage.removeItem('hbk-auth');
};

export const isAccessTokenExpired = () => {
    const tokenResponse = getLocalTokenResponse();
    if (!tokenResponse || !tokenResponse.expires_in) { return null; }
    return Date.now() >= parseInt(tokenResponse.expires_in);
};

export const getAccessToken = async () => {
    const tokenStatus = isAccessTokenExpired();
    console.log("Token STATUS: " + tokenStatus);
    if (tokenStatus === false) {
        console.log("Token From login access");
        return getLocalTokenResponse().access_token;
    } else if (tokenStatus === true) {
        console.log("Token From refresh access");
        return doLoginRequestByRefresh(getLocalTokenResponse().refresh_token);
    } else {
        console.log("Anonymous access");
        return doAnonymousAccess();
    }
};
