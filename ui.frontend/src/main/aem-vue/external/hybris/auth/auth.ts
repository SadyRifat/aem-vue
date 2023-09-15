import axios from 'axios';

const TOKEN_API_URL = 'https://spartacus-demo.eastus.cloudapp.azure.com:8443/authorizationserver/oauth/token';

export const doLoginRequestByRefresh = async (refreshToken: string) => {
    const refreshTokenParams: TokenGrantRefreshParams = {
        refresh_token: refreshToken,
        grant_type: 'refresh_token',
        client_id: 'mobile_android',
        client_secret: 'secret',
    };

    try {
        const formData = new URLSearchParams(
            Object.entries(refreshTokenParams).map(([key, value]) => [key, value])
        );

        const response = await axios.post(TOKEN_API_URL, formData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        saveTokenResponseInLocal(response.data);

        return response.data;
    } catch (error) {
        console.error('Error refreshing token:', error);
        return null;
    }
};

export const doLoginRequestByPassword = async (email: string, password: string) => {
    const accessTokenParams: TokenGrantPasswordParams = {
        grant_type: 'password',
        client_id: 'mobile_android',
        client_secret: 'secret',
        scope: '',
        username: email,
        password: password,
    };

    try {
        const formData = new URLSearchParams(
            Object.entries(accessTokenParams).map(([key, value]) => [key, value])
        );

        const response = await axios.post(TOKEN_API_URL, formData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        saveTokenResponseInLocal(response.data);

        return response.data;
    } catch (error) {
        console.error('Error fetching access token:', error);
        return null;
    }
};

export const doAnonymousAccess = async () => {
    const anonymousAccessTokenParams: TokenGrantBaseParams = {
        grant_type: 'client_credentials',
        client_id: 'mobile_android',
        client_secret: 'secret'
    };

    try {
        const formData = new URLSearchParams(
            Object.entries(anonymousAccessTokenParams).map(([key, value]) => [key, value])
        );

        const response = await axios.post(TOKEN_API_URL, formData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        saveTokenResponseInLocal(response.data);

        return response.data;
    } catch (error) {
        console.error('Error fetching access token:', error);
        return null;
    }
};

export const saveTokenResponseInLocal = (tokenResponse: any) => {
    tokenResponse.expires_in = Date.now() + tokenResponse.expires_in;
    localStorage.setItem('hbk-auth', JSON.stringify(tokenResponse));
};
