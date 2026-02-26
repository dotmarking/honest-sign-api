import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { LoginCredentials, LoginOMSCredentials } from './interfaces/request/auth.interface';
import type {
    GetAuthKeyResponse,
    GetOrganisationsResponse,
    LoginOMSResponse,
    LoginResponse,
} from './interfaces/response/auth.interface';

@Injectable()
export class HonestSignAuthService {
    public constructor(private readonly httpService: HttpService) {}

    public async getAuthKey() {
        return this.httpService.get<GetAuthKeyResponse>('/api/v3/true-api/auth/key');
    }

    public async getOrganisations(credentials: LoginCredentials) {
        return this.httpService.post<GetOrganisationsResponse>('/bff-elk/v1/united-auth/login', {
            kep: credentials,
        });
    }

    public async login(credentials: LoginCredentials) {
        return this.httpService.post<LoginResponse>('/bff-elk/v1/united-auth/login', {
            kep: credentials,
        });
    }

    public async loginOMS(credentials: LoginOMSCredentials, omsConnection: string) {
        return this.httpService.post<LoginOMSResponse>(
            `/api/v3/true-api/auth/simpleSignIn/${omsConnection}`,
            {
                ...credentials,
            },
        );
    }
}
