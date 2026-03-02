export interface GenerateGtinsResponse {
    result: {
        'monthly-limit'?: {
            limit: number;
            usage: number;
        };
        linit: string;
        usage: string;
        drafts?: [];
        gtin: string;
    };
}

export interface CreateCardResponse {
    result: {
        feed_id: string;
    };
}

export interface SendCardForModerationResponse {
    result: {
        good_id: number;
        error?: string;
    };
}

export interface GetOwnerCardsInfoRespnose {
    result: [
        {
            identified_by: [
                {
                    value: string;
                    type: string;
                    multiplier: number;
                    level: string;
                },
            ];
            good_id: number;
            good_name?: string;
            is_kit: boolean;
            is_set: boolean;
            set_gtins?: [
                {
                    gtin: string;
                    quantity: string;
                },
            ];
            good_img?: string;
            good_status: string;
            good_detailed_status?: [];
            good_signed: boolean;
            good_mark_flag: boolean;
            good_turn_flag: boolean;
            flags_updated_date: string;
            create_date: string;
            update_date: string;
            producer_inn: string;
            producer_name: string;
            categories: [
                {
                    cat_id: number;
                    cat_name: string;
                },
            ];
            brand_id: number;
            brand_name: string;
            good_images?: [
                {
                    photo_type?: string;
                    photo_date?: string;
                    photo_url?: string;
                    barcode?: string;
                },
            ];
            good_attrs: [
                {
                    attr_id: number;
                    attr_name: string;
                    attr_value_id: number;
                    attr_value: string;
                    value_id: number;
                    attr_value_type?: string;
                    attr_group_id?: number;
                    attr_group_name: string;
                    location_id?: number;
                    level?: string;
                    gtin: string;
                    multiplier?: number;
                    certificate_number?: string;
                    certificate_issued_date?: string;
                    certificate_valid_until_date?: string;
                    certificate_applicant?: string;
                    certificate_manufacturer?: string;
                    certificate_product_description?: string;
                },
            ];
            remainder_type: string;
            is_tech_gtin: boolean;
            first_sign_date?: string;
        },
    ];
}

export interface GetCategoryTreeResponse {
    result: [
        {
            cat_id: number;
            cat_name: string;
            cat_parent_id: number;
            cat_level: number;
            category_active: boolean;
            gismt_codes?: number[];
        },
    ];
}

export interface GetAttributesResponse {
    result: [
        {
            attr_group_id: number;
            attr_name: string;
            preset_url?: string;
            attr_present_only: boolean;
            attr_multiplicity: boolean;
            attr_multiplicity_type: string;
            attr_id: number;
            attr_group_name: string;
            attr_field_type?: string;
            attr_value_type?: [];
            dependent_attributes?: [
                {
                    value: string;
                    atters: [
                        {
                            attr_id?: number;
                            first_layer: boolean;
                            second_layer: boolean;
                            attr_type?: string;
                        },
                    ];
                },
            ];
            first_layer: boolean;
            second_layer: boolean;
            attr_type?: string;
            attr_preset?: [];
        },
    ];
}

export interface GetProductionCountries {
    result: [
        {
            _etag: string;
            _list: [
                {
                    country_iso?: string;
                    country_name?: string;
                },
            ];
        },
    ];
}

export interface GetBrandsListResponse {
    result: [
        {
            brand_id: number;
            name: string;
        },
    ];
}

export interface CheckPermitExistsResponse {
    result: [
        {
            number: string;
            models?: [
                {
                    model?: string;
                },
            ];
            dates?: [
                {
                    date_from?: string;
                },
            ];
        },
    ];
}
