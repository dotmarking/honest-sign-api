import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import {
    CreateEmissionOrderBody,
    CreateEmissionOrderResponse,
    GetCodesFromEmissionOrderParams,
    GetCodesFromEmissionOrderResponse,
    GetCodesFromEmissionOrderRetryParams,
    GetEmissionOrdersResponse,
    OmsAccessToken,
} from './types/suz-api.interface';

@Injectable()
export class SuzApiService {
    public constructor(private readonly httpService: HttpService) {}

    /**
     * @documentation СУЗ API 4.4.1
     * @description Этот метод используется для создания и отправки заказа на эмиссию КМ
     */
    public createEmissionOrder(
        token: OmsAccessToken,
        omsId: string,
        body: CreateEmissionOrderBody,
    ) {
        return this.httpService.post<CreateEmissionOrderResponse>('/api/v3/order', body, {
            headers: { Authorization: `Bearer ${token}` },
            params: omsId,
        });
    }

    /**
     * @documentation СУЗ API 4.4.3
     * @description Этот метод используется для получения статуса бизнес заказов. Обращение к данному методу с одного источника, как и к методу создания
     * заказов, возможно не чаще, чем 100 раз в секунду.
     */
    public getEmissionOrders(token: OmsAccessToken, omsId: string) {
        return this.httpService.get<GetEmissionOrdersResponse>('/api/v3/order', {
            headers: { Authorization: `Bearer ${token}` },
            params: omsId,
        });
    }

    /**
     * @documentation СУЗ API 4.4.4
     * @description Этот метод используется для получения массива КМ определённого заказа
     */
    public getCodesFromEmissionOrder(
        token: OmsAccessToken,
        params: GetCodesFromEmissionOrderParams,
    ) {
        return this.httpService.get<GetCodesFromEmissionOrderResponse>('/api/v3/order/status', {
            headers: { Authorization: `Bearer ${token}` },
            params,
        });
    }

    /**
     * @documentation СУЗ API 4.4.6
     * @description Этот метод используется для повторного получения массива эмитированных КМ из
     * заказа кодов маркировки в случае, если коды маркировки не были получены в результате
     * коммуникационных ошибок при взаимодействии с СУЗ.
     */
    public getCodesFromEmissionOrderRetry(
        token: OmsAccessToken,
        params: GetCodesFromEmissionOrderRetryParams,
    ) {
        return this.httpService.get<GetCodesFromEmissionOrderResponse>(
            '/api/v3/order/codes/retry',
            {
                headers: { Authorization: `Bearer ${token}` },
                params,
            },
        );
    }
}
