export interface CreateCardRequest {
    good_id?: number;
    gtin?: string;
    is_set: boolean;
    is_tech_gtin: boolean;
    good_name?: string;
    is_kit: string;
    tnved?: string;
    brand?: string;
    moderation?: boolean;
    set_gtins?: [
        {
            gtin: string;
            quantity?: number;
        },
    ];
    identified_by?: [
        {
            type: string;
            value: string;
            level: string;
            multiplier: number;
            unit: string;
        },
    ];
    categories?: [
        {
            cat_id: number;
        },
    ];
    good_attrs?: [
        {
            attr_id?: string;
            attr_value?: string;
            attr_value_type?: string;
            gtin?: string;
            delete?: boolean;
        },
    ];
    good_images?: [
        {
            photo_type: string;
            photo_url: string;
            identifier?: string;
            identifier_type?: string;
        },
    ];
}

export interface SendCardForModerationRequest {
    good_id?: string;
    gtin?: string;
    inn?: string;
}

export interface GetOwnerCardsInfoRequest {
    gtin?: string;
    good_id?: string;
    gtins?: string;
    good_ids?: string;
    subaccount?: boolean;
}

export interface GetCardsInfoRequest {
    gtin?: string;
    good_id?: string;
    gtins?: string;
    good_ids?: string;
    cat_id?: number;
}

export interface GetCategoryTreeRequest {
    cat_id?: string;
    gismt_code?: string;
    tnved?: string;
}

export interface GetAttributesRequest {
    cat_id?: number;
    tnved?: string;
    is_set?: boolean;
    attr_type?: 'a' | 'm' | 'r' | 'o';
}

export interface GetBrandsListRequest {
    name?: string;
    limit?: number;
    offset?: number;
}

export interface CheckPermitExistsRequest {
    attr_id: number;
    number: string;
    model?: string;
    search_date_from?: boolean;
}
