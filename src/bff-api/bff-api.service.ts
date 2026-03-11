import { HttpService } from '@nestjs/axios';
import { GetOrganisationsResponse, LoginResponse } from './types/bff-api.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BffApiService {
    public constructor(private readonly httpService: HttpService) {}

    /**
     * @documentation Backend for Frontend API
     * @description Этот метод используется для получения всех организаций, в том числе МЧД
     */
    public getOrganisations(data: string, mrdToken: boolean) {
        return this.httpService.post<GetOrganisationsResponse>('/v1/united-auth/login', {
            data,
            mrdToken,
        });
    }

    /**
     * @documentation Backend for Frontend API
     * @description Этот метод используется для авторизация, в том числе по МЧД
     */
    public login(data: string, mrdToken: boolean) {
        return this.httpService.post<LoginResponse>('/v1/united-auth/login', { data, mrdToken });
    }
}
