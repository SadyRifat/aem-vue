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


let tokenRefreshPromise: Promise<string | void> | null = null;

export const getAccessToken = async (): Promise<string> => {
    if (tokenRefreshPromise) {
        return tokenRefreshPromise as Promise<string>;
    }

    const tokenStatus = isAccessTokenExpired();
    console.log("Token Expire STATUS: " + tokenStatus);

    if (tokenStatus === false) {
        console.log("Token From login access");
        return Promise.resolve(getLocalTokenResponse().access_token);
    } else if (tokenStatus === true) {
        console.log("Token From refresh access");

        // Start a token refresh request
        tokenRefreshPromise = doLoginRequestByRefresh(getLocalTokenResponse().refresh_token)
            .then((accessResponse) => {
                console.log("New Access Token: " + accessResponse.access_token);
                return accessResponse.access_token;
            })
            .finally(() => {
                tokenRefreshPromise = null;
            });

        return tokenRefreshPromise as Promise<string>;
    } else {
        console.log("Anonymous access");
        return Promise.resolve(doAnonymousAccess());
    }
};
