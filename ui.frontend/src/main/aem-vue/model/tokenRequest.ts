interface TokenGrantBaseParams {
    grant_type: string;
    client_id: string;
    client_secret: string;
}

interface TokenGrantRefreshParams extends TokenGrantBaseParams {
    refresh_token: string;
}

interface TokenGrantPasswordParams extends TokenGrantBaseParams {
    scope: string;
    username: string;
    password: string;
}
