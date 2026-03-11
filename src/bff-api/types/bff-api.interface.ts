//1
export interface GetOrganisationsResponse {
    organisations: [
        {
            inn: string;
            fullName: string;
        },
    ];
}

//2
export interface LoginResponse {
    access_token: string;
    id_token: string;
    expires_in: number;
    token_type: string;
}
