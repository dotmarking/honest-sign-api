export type OmsAccessToken = string;

//4.4.1
export interface CreateEmissionOrderBody {
    productGroup: string;
    products: [
        {
            gtin: string;
            quantity: string;
            serialNumberType: string;
            serialNumbers?: string[];
            templateId: string;
            cisType: string;
            attributes?: Record<string, string>;
        },
    ];
}
export interface CreateEmissionOrderResponse {
    omsId: string;
    orderId: string;
    expectedCompleteTimestamp: number;
}

//4.4.3
export interface GetEmissionOrdersResponse {
    orderInfos?: [
        {
            orderId: string;
            orderStatus: string;
            buffers: [
                {
                    omsId?: string;
                    orderId?: string;
                    availableCodes: number;
                    bufferStatus: string;
                    gtin: string;
                    leftInBuffer: number;
                    poolsInBuffer: number;
                    rejectionReason?: string;
                    totalCodes: number;
                    totalPassed: number;
                    unavailableCodes: number;
                    expiredDate?: number;
                    productionOrderId?: string;
                    cisType: string;
                    templateId: number;
                },
            ];
            createdTimestamp: number;
            declineReason?: string;
            productionOrderId?: string;
            productGroup: string;
            paymentType?: number;
        },
    ];
}

//4.4.4
export interface GetCodesFromEmissionOrderParams {
    omsId: string;
    orderId: string;
    quantity: number;
    gtin: string;
}

//4.4.4, 4.4.6
export interface GetCodesFromEmissionOrderResponse {
    omsId: string;
    codes: string[];
    blockId: string;
}

//4.4.6
export interface GetCodesFromEmissionOrderRetryParams {
    omsId: string;
    orderId: string;
    gtin: string;
}
