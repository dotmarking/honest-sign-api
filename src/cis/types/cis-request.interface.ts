export interface CreateEmissionOrderRequest {
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

export interface GetEmissionOrderCisRequest {
    omsId: string;
    orderId: string;
    quantity: number;
    gtin: string;
}

export interface GetCisesListRequest {
    filter: {
        emissionDatePeriod?: {
            from?: string; // yyyy-MM-ddTHH:mm:ss.SSSZ
            to?: string; // yyyy-MM-ddTHH:mm:ss.SSSZ
        };
        applicationDatePeriod?: {
            from?: string; // yyyy-MM-ddTHH:mm:ss.SSSZ
            to?: string; // yyyy-MM-ddTHH:mm:ss.SSSZ
        };
        productionDatePeriod?: {
            from?: string; // yyyy-MM-ddTHH:mm:ss.SSSZ
            to?: string; // yyyy-MM-ddTHH:mm:ss.SSSZ
        };
        introducedDatePeriod?: {
            from?: string; // yyyy-MM-ddTHH:mm:ss.SSSZ
            to?: string; // yyyy-MM-ddTHH:mm:ss.SSSZ
        };
        gtins?: string[];
        producerInns?: string[];
        generalPackageTypes?: string[];
        turnoverTypes?: string[];
        states?: [
            {
                status?: string;
                statusExt?: string;
                isStatusExtNull?: boolean;
            },
        ];
        tnVed?: string;
        tnVed10?: string;
        emissionTypes?: string[];
        isAggregated?: boolean;
        productGroups: string[]; // обязательное
        eliminationReasons?: string[];
        prVetDoc?: string;
        haveChildren?: boolean;
        serviceProviderIdPresented?: boolean;
        serviceProviderTypes?: string[];
        orderIds?: string[];
        partyNumber?: string;
        mods?: [
            {
                kpp: string;
                fiasId: string;
            },
        ];
        manufacturerInns?: string;
        importerInns?: string;
    };
}
