export interface GetOrderCises {
    results: [
        {
            orderId: string;
            orderStatus: string;
            createdTimestamp: number;
            productGroup: string;
            buffers: [
                {
                    availableCodes: number;
                    bufferStatus: string;
                    gtin: string;
                    leftInBuffer: number;
                    poolsExhausted: boolean;
                    totalCodes: number;
                    totalPassed: number;
                    unavailableCodes: number;
                    expiredDate: number;
                    productionOrderId: string;
                    cisType: string;
                    templateId: number;
                },
            ];
        },
    ];
    totalCount: number;
}

export interface GetCises {
    result: [
        {
            sgtin: string;
            cis: string;
            cisWithoutBrackets: string;
            gtin: string;
            producerInn: string;
            status: string;
            emissionDate: string;
            generalPackageType: string;
            ownerInn: string;
            emissionType: string;
            productGroup: string;
            haveChildren: false;
            expiration: any[];
            orderId: string;
            modInfo: {};
        },
    ];
}

export interface GetCisesInfo {
    cis: string;
    status: string;
    producerInn: string;
    ownerInn: string;
    ownerName: string;
}
