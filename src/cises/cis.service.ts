import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import type { GetCises, GetCisesInfo, GetOrderCises } from './interfaces/response/cis.interface';

@Injectable()
export class CisService {
    public constructor(private readonly httpService: HttpService) {}

    public getOrderCises(filter: object, omsId: string, omsAccessToken: string) {
        return this.httpService.post<GetOrderCises>('/api/v3/orders/search', filter, {
            params: { omsId },
            headers: { Authorization: `Bearer ${omsAccessToken}` },
        });
    }

    public getCises(filter: object, omsAccessToken: string) {
        return this.httpService.post<GetCises>('/api/v4/true-api/cises/search', filter, {
            headers: { Authorization: `Bearer ${omsAccessToken}` },
        });
    }

    public getCisesInfo(cises: string[], omsAccessToken: string) {
        return this.httpService.post<GetCisesInfo>('/api/v3/true-api/cises/info', cises, {
            headers: { Authorization: `Bearer ${omsAccessToken}` },
        });
    }
}
