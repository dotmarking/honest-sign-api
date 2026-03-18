import { HttpService } from '@nestjs/axios';
import { GetOrganisationsResponse, LoginBody, LoginResponse } from './types/bff-api.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BffApiService {
    public constructor(private readonly httpService: HttpService) {}

    /**
     * @documentation Backend for Frontend API
     * @description Этот метод используется для получения всех организаций, в том числе МЧД
     */
    public getOrganisations(body: LoginBody) {
        return this.httpService.post<GetOrganisationsResponse>('/v1/united-auth/login', body);
    }

    /**
     * @documentation Backend for Frontend API
     * @description Этот метод используется для авторизация, в том числе по МЧД
     */
    public login(body: LoginBody) {
        return this.httpService.post<LoginResponse>('/v1/united-auth/login', body);
    }
}
