export interface CreateEmissionOrderResponse {
    omsId: string;
    orderId: string;
    expectedCompleteTimestamp: number;
}

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

export interface GetEmissionOrderCisResponse {
    omsId: string;
    codes: string[];
    blockId: string;
}

export interface GetCisesList {
    isLastPage: boolean;
    result: [
        {
            sgtin: string;
            cis?: string;
            gtin?: string;
            producerInn?: string;
            status?: string;
            statusExt: string;
            emissionDate?: string; // date-time
            applicationDate?: string; // date-time
            productionDate?: string; // date-time
            generalPackageType?: string;
            ownerInn?: string;
            tnVed?: string;
            tnVed10?: string;
            emissionType?: string;
            productGroup?: string;
            haveChildren?: boolean;
            parent?: string;
            eliminationReason?: string;
            expirationDate?: string; // date-time
            prVetDocument?: string;
            mrp?: number;
            introducedDate?: string; // date-time
            receiptDate?: string; // date-time
            turnoverType?: string;
            color?: string;
            productSize?: string;
            country?: string;
            inGrayZone?: boolean;
            serviceProviderId?: string;
            serviceProviderType?: string;
            returnType?: string;
            eliminationReasonOther?: string;
            modId?: string;
            modInfo?: [
                {
                    kpp: string;
                    fiasId: string;
                    address: string;
                },
            ];
            manufacturerInn?: string;
            importerInn?: string;
            productWeight?: number;
            expiration?: [
                {
                    expirationStorageDate?: string; // yyyy-MM-ddTHH:mm:ss.SSSZ
                    storageConditionId?: string;
                },
            ];
            emissionCountryCode?: number;
            exportCountryCode?: number;
            orderId?: string;
            operationIntroducedDate?: string; // date-time
            partyNumber?: string;
            productLengthMm?: number;
            error_message?: string;
        },
    ];
}

export interface GetCisesInfoResponse {
    cisInfo?: [
        {
            requestedCis: string;
            cis: string;
            applicationDate?: string;
            introducedDate?: string;
            ogvs?: string[];
            gtin?: string;
            tnVedEaes?: string;
            tnVedEaesGroup?: string;
            productName?: string;
            productGroupId?: number;
            productGroup: string;
            producedDate?: string;
            emissionDate?: string;
            emissionType?: string;
            generalPackageType: string;
            brand?: string;
            packageType: string;
            ownerInn?: string;
            ownerName?: string;
            status?: string;
            statusEx?: string;
            markWithdraw?: boolean;
            turnoverType?: string;
            certDoc?: [
                {
                    type?: string;
                    number?: string;
                    date?: string;
                    wellNumber?: string;
                    indx?: number;
                    statusGroup?: number;
                },
            ];
            certDocRequirementDetails?: {
                notRequiredReason?: string;
                isRequired?: boolean;
            };
            child?: string[];
            parent?: string;
            maxRetailPrice?: number;
            mcGtinCop?: number[];
            volumeSpecialPack?: string;
            producerInn?: string;
            producerName?: string;
            prVetDocument?: string;
            exporterName?: string;
            expirationDate?: string;
            productWeightGr?: number;
            isVarQuantity?: boolean;
            partialSaleInfo?: {
                innerUnitCount?: number;
                soldUnitCount?: number;
                rest?: number;
                correctRest?: boolean;
            };
            expirations?: [
                {
                    expirationStorageDate?: string;
                    storageConditionId?: number;
                    storageConditionName?: string;
                },
            ];
            withdrawReason?: string;
            withdrawReasonOther?: string;
            connectDate?: string;
            ownerMod?: {
                modId?: number;
                kpp?: string;
                fiasId?: string;
                address?: string;
            };
            applicationMod?: {
                kpp?: string;
                fiasId?: string;
                address?: string;
            };
            licences?: [
                {
                    licenceNumber?: string;
                    licenceDate?: string;
                },
            ];
            batchNumber?: string;
            manufacturerSerialNumber?: string;
            partyNumber?: string;
            productLengthMm?: number;
            isTracking?: boolean;
            isExcisableProduct?: boolean;
            exciseProductCode?: string;
            manufacturerInn?: string;
            manufacturerName?: string;
            importerInn?: string;
            importerName?: string;
            isMultipleSales?: boolean;
        },
    ];
    errorMessage?: string;
    errorCode?: string;
}
