export interface LoginResponse {
    access_token: string;
    id_token: string;
    expires_in: number;
    token_type: string;
}

export interface GetAuthKeyResponse {
    uuid: string;
    data: string;
}

export interface LoginOMSResponse {
    token: string;
}

export interface GetOrganisationsResponse {
    organisations: [
        {
            inn: string;
            fullName: string;
        },
    ];
}
