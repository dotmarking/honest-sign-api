import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { catchError, map } from 'rxjs/operators';
import { AxiosError } from 'axios';
import type {
    CreateEmissionOrderResponse,
    GetCisesList,
    GetCisesInfoResponse,
    GetEmissionOrderCisResponse,
    GetEmissionOrdersResponse,
    CreateEmissionOrderRequest,
    GetCisesListRequest,
    GetEmissionOrderCisRequest,
} from './types';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class HonestSignCisService {
    public constructor(private readonly httpService: HttpService) {}

    // 4.4.1
    public createEmissionOrder(
        order: CreateEmissionOrderRequest,
        omsId: string,
        omsAccessToken: string,
    ) {
        return this.httpService.post<CreateEmissionOrderResponse>(
            '/api/v3/order',
            { ...order },
            {
                params: omsId,
                headers: { Authorization: `Bearer ${omsAccessToken}` },
            },
        );
    }

    // 4.4.3
    public getEmissionOrders(omsId: string, omsAccessToken: string) {
        return this.httpService.get<GetEmissionOrdersResponse>('/api/v3/order/list', {
            params: omsId,
            headers: { Authorization: `Bearer ${omsAccessToken}` },
        });
    }

    // 4.4.4
    public getEmissionOrderCis(params: GetEmissionOrderCisRequest, omsAccessToken: string) {
        return this.httpService.get<GetEmissionOrderCisResponse>('/api/v3/codes', {
            params,
            headers: { Authorization: `Bearer ${omsAccessToken}` },
        });
    }

    /* ---------------------- */
    /* TRUE API */
    /* ---------------------- */

    // 5.1.1
    public getCisesList(filter: GetCisesListRequest, omsAccessToken: string) {
        return this.httpService
            .post<GetCisesList>('https://markirovka.crpt.ru/api/v4/true-api/cises/search', filter, {
                headers: { Authorization: `Bearer ${omsAccessToken}` },
            })
            .pipe(
                map((response) => {
                    throw new RpcException({
                        code: 13,
                        message: response.data.errorMessage || 'Ошибка при работе с честным знаком',
                    });
                }),
            );
    }

    // 5.1.2
    public getCisesInfo(cises: string[], omsAccessToken: string) {
        return this.httpService.post<GetCisesInfoResponse>(
            'https://markirovka.crpt.ru/api/v3/true-api/cises/info',
            cises,
            {
                headers: { Authorization: `Bearer ${omsAccessToken}` },
            },
        );
    }
}
