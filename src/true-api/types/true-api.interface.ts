import { categoriesTranslations } from '../constants/categories';
import { statusTranslations } from '../constants/status';

export type HonestSignAccessToken = string;
export type ProductGroup = keyof typeof categoriesTranslations;
export type GoodStatus = Pick<typeof statusTranslations, 'draft' | 'published' | 'archived'>;
export type AttrType = 'a' | 'm' | 'r' | 'o';
export type FileFormat = 'json' | 'xml';
export type PhotoType =
    | 'default'
    | 'facing'
    | 'left'
    | 'right'
    | 'back'
    | '3ds'
    | 'marketing'
    | 'ecommerce'
    | 'undef'
    | 'cubi';

export interface ErrorMessage {
    error_message?: string;
}

// 1.5.1
export interface GetAuthKeyResponse {
    uuid: string;
    data: string;
}

//3.8.1 - 3.8.2
export interface GetProductGroupBalanceResponse {
    balance?: number;
    contractId?: number;
    organisationId: number;
    productGroupId: number;
}

//5.1.1
export interface GetCisesFilter {
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
        productGroups: ProductGroup[];
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
export interface GetCisesResponse {
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
    errorMessage?: string;
}

//5.1.2
export interface GetCisesPublicInfoParams {
    pg?: ProductGroup;
    childsWithoutBrackets?: boolean;
}
export interface GetCisesPublicInfoResponse {
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

//5.1.3
export interface GetCisesPublicShortInfoResponse {
    result?: [
        {
            cis: string; // КИ в нормализованном виде
            requestedCis: string; // КИ запрашиваемых потребительских/групповых/транспортных упаковок. Значение КИ из запроса
            applicationDate?: string; // Дата нанесения. Формат: yyyy-MM-ddTHH:mm:ss.SSS'Z. Не возвращается для КИТУ, АТК
            children?: string[]; // Список дочерних КИ в агрегате. Возвращается список КИ только верхнего уровня
            emissionDate?: string; // Дата эмиссии. Формат: yyyy-MM-ddTHH:mm:ss.SSS'Z
            emissionType?: string; // Тип эмиссии. См. справочник «Типы эмиссии КИ»
            gtin?: string; // Код товара. Дополняется ведущими нулями до 14 символов. Не выводится для ATK, BOX
            ogvs?: string[]; // Органы госвласти, установившие блокировку: RAR, FTS, FNS, RSHN, RPN, MVD, RZN
            ownerInn?: string; // ИНН владельца КИ
            packageType?: string; // Уровень упаковки. Устаревший, использовать extendedPackageType
            extendedPackageType?: string; // Тип упаковки. См. справочник «Типы упаковки»
            parent?: string; // Родительский КИ
            volumeSpecialPack?: string; // Фактический объём выпущенной продукции, мл (для пива и др.)
            producerInn?: string; // ИНН производителя (не для определённых товарных групп)
            productGroup?: string; // Товарная группа. См. справочник товарных групп
            productGroupId?: string; // ID товарной группы
            producedDate?: string; // Дата производства. Формат: yyyy-MM-ddTHH:mm:ss.SSS'Z. Не для КИТУ, АТК (кроме табака)
            receiptDate?: string; // Дата вывода из оборота (КИ, КИН, КИГУ, КИК). Формат: yyyy-MM-ddTHH:mm:ss.SSS'Z
            status: string; // Статус КИ. См. справочник «Статусы КИ»
            statusEx?: string; // Расширенный статус КИ, КИН, КИГУ
            tnVedEaes?: string; // 10-значный код ТН ВЭД (КИ, КИН, КИГУ)
            tnVedEaesGroup?: string; // 4-значный код ТН ВЭД (КИ, КИН, КИГУ)
            withdrawReason?: string; // Причина выбытия. См. справочник «Причины выбытия»
            licences?: Array<{
                licenceNumber: string; // Номер лицензии на пользование недрами (вода)
                licenceDate: string; // Дата выдачи лицензии (вода). Формат: yyyy-MM-ddTHH:mm:ss.SSSZ
            }>;
            batchNumber?: string; // Номер серии товара
            partyNumber?: string; // Номер партии товара
            specialAttributes?: {
                maxRetailPrice?: number; // Макс. цена розничной продажи (единица/группа)
                expirationDate?: string; // Срок годности (молочка). Формат: yyyy-MM-ddTHH:mm:ss.SSS'Z
                prVetDocument?: string; // Идентификатор ВСД
                introducedDate?: string; // Дата ввода в оборот/формирования агрегата. yyyy-MM-ddTHH:mm:ss.SSS'Z
                capacity?: string; // Объём (молочка)
                nextCis?: string; // Следующие КИ после перемаркировки
                prevCis?: string; // Предыдущие КИ до перемаркировки
                productLengthMm?: number; // Длина товара в упаковке, мм
                turnoverType?: string; // Вид товарооборота: SELLING, CONTRACT
                retType?: string; // Тип возврата в оборот
                expNum?: string; // ИНН/УНБ экспортёра
                expName?: string; // Наименование экспортёра
                remainsImport?: string; // Признак импортного товара после 01.07.2020
                ftsDecisionCode?: string; // Код решения из ДТ
                quantityInPack?: string; // Количество единиц/объём в упаковке
                soldCount?: string; // Счётчик проданного/возвращённого
                eliminationReasonOther?: string; // Описание другой причины вывода
                productWeightGr?: number; // Вес продукции в граммах (001234 = 1.234 кг)
                manufacturerSerialNumber?: string; // Заводской серийный номер
                approvementDocument?: Array<{
                    declarationDate?: string; // Дата ДТ
                    declarationId?: string; // Регистрационный номер ДТ
                    declarationRegNumber?: string; // ID ДТ
                    certDoc?: Array<{
                        type: string; // Тип сертификата. См. справочник разрешительной документации
                        number: string; // Номер сертификата
                        date: string; // Дата сертификата. yyyy-MM-ddTHH:mm:ss.SSS'Z
                        wellNumber?: string; // Номер скважины (вода)
                    }>;
                }>;
                expirations?: Array<{
                    expirationStorageDate: string; // Дата срока годности. yyyy-MM-ddTHH:mm:ss.SSSZ
                    storageConditionId?: number; // ID условия хранения
                }>;
                connectDate?: string; // Дата подключения кега (пиво). yyyy-MM-ddTHH:mm:ss.SSS'Z
                ownerMod?: {
                    modId: number; // ID места деятельности (пиво)
                };
                isMultipleSales?: boolean; // Множественные продажи
                isTracking?: boolean; // Прослеживаемость кода
                manufacturerInn?: string; // ИНН производителя товара
                importerInn?: string; // ИНН импортёра вне ЕАЭС
            };
            connectDate?: string; // Дата подключения кега (пиво)
            ownerMod?: {
                modId: number; // ID места деятельности (пиво)
            };
            isMultipleSales?: boolean; // Множественные продажи
            isTracking?: boolean; // Прослеживаемость
            manufacturerInn?: string; // ИНН производителя товара
            importerInn?: string; // ИНН импортёра
        },
    ];
    errorMessage?: string;
    errorCode?: string;
}

//5.1.7
export interface VerificationCodesBody {
    codes: string[];
}
export interface VerificationCodesResponse {
    result: boolean;
    quantity: number;
    codes: string[];
}

//5.6.1
export interface GetProductInfoByGtinParams {
    gtins: string[];
    rdInfo?: boolean;
}
export interface GetProductInfoByGtinResponse {
    results: [
        {
            name: string;
            gtin: string;
            brand: string;
            subBrand?: string;
            privateBrand?: string;
            packageType: string;
            innerUnitCount: number;
            model?: string;
            inn: string;
            exporter?: {
                exporterName?: string;
                exporterTaxpayerId?: string;
                kpp?: string;
                gcp?: string;
                gln?: string;
                manufactureAddress?: string;
            };
            permittedInns: string[];
            productGroupId: number;
            goodSignedFlag?: boolean;
            goodMarkFlag?: boolean;
            goodTurnFlag?: boolean;
            isKit?: boolean;
            isTechGtin?: boolean;
            explain?: string;
            foreignProducer?: {
                name?: string;
                inn?: string;
                kpp?: string;
                gcp?: string;
                gln?: string;
                address?: string[];
            };
            isSet?: boolean;
            setGtin?: [
                {
                    gtin?: string;
                    quantity?: number;
                },
            ];
            level?: string;
            mainGtin?: number;
            multiplier?: number;
            reasonCertMissing?: string;
            reasonCertMissingDetails?: {
                value?: string;
                type?: string;
                typeBool?: boolean;
            };
            goodStatus?: GoodStatus;
            productGroup?: ProductGroup;
            standardNumber?: string;
            tnVedCode?: string;
            tnVedCode10?: string;
            certDocList?: [
                {
                    type?: string;
                    number?: string;

                    //Формат: yyyy-MM-dd
                    date?: string;

                    //Формат: yyyy-MM-dd
                    dateTo?: string;
                    series?: string;
                    guid?: string;
                    active?: boolean;
                    unlimited?: string;
                    errorCode?: number;
                    errorMessage?: string;
                },
            ];
            authDocNumber?: string;
            sAutoAttachPermitsInfoDetails?: {
                value?: string;
                typeBool?: boolean;
            };
            okpd2Group?: string;
            okpd2Code?: string;
            sExcisableProduct?: boolean;
            exciseProductCode?: boolean;
            quantityInPack?: number;
            quantityInPackType?: string;
            basicUnit?: string;
            setDescription?: string;
            fullName?: string;
            methodProduction?: string;
            releaseForm?: string;
            storageConditions?: string;
            storageCondition?: [
                {
                    storageConditionName?: string;
                    storageConditionId?: number;
                },
            ];
            isVarQuantity?: boolean;
            volumeWeight?: string;
            weightMin?: string;
            weightMax?: string;
            coreVolume?: number;
            coreWeight?: number;
            volumeTradeUnit?: string;
            expireDuration?: string;
            colors?: string[];
            conformityCertificate?: string[];
            conformityDeclaration?: string[];
            registrationCertificate?: string[];
            stateRegistrationCertificate?: string[];
            permits?: {
                conformityCertificate?: string[];
                conformityDeclaration?: string[];
                registrationCertificate?: string[];
                stateRegistrationCertificate?: string[];
                vetRegistrationCertificate?: string[];
            };
            mc?: [
                {
                    mcName?: string;
                    mcTariff?: number;
                    mcGtinCop?: number;
                    dateFrom?: string;
                    dateTo?: string;
                },
            ];
        },
    ];
    total: number;
    errorCode?: string;
}

//5.6.2
export interface GetOwnerProductGtinsParams {
    limit?: number;
    page?: number;
    pg: string;
    includeSubaccount?: boolean;
}
export interface GetOwnerProductGtinsResponse {
    results: [
        {
            goodStatus?: GoodStatus;
            gtin: string;
            isGtinSubaccount: boolean;
            isKit: boolean;
            isSet: boolean;
            permittedInns?: string[];
            setDescription?: string;
            setGtin?: [
                {
                    gtin?: string;
                    quantity?: number;
                },
            ];
        },
    ];
    total: number;
    errorCode?: string;
}

//9.1
export interface GetParticipantEdoIdResponse {
    inn?: string;
    id?: string;
    name?: string;
    hub?: boolean;
    error_message?: string;
}

//10.2
export interface GetAttributesParams {
    attr_type?: AttrType;
    cat_id?: number;
    tnved?: string;
    is_set?: boolean;
    format?: FileFormat;
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

//10.3
export interface GetBrandsParams {
    name?: string;
    limit?: number;
    offset?: number;
}
export interface GetBrandsResponse {
    apiversion: number;
    result?: [
        {
            brand_id: number;
            name: string;
        },
    ];
}

//10.7
export interface GetCategoryTreeParams {
    apiKey?: string;
    cat_id?: string;
    gismt_code?: string;
    tnved?: string;
}
export interface GetCategoryTreeResponse {
    apiversion: number;
    result?: [
        {
            cat_id?: number;
            cat_name?: string;
            cat_parent_id?: number;
            cat_level?: number;
            category_active?: boolean;
            gismt_codes?: number[];
        },
    ];
}

//10.8-10.9
export interface GetProductInfoParams {
    apikey?: string;
    good_id?: string;
    gtin?: string;
    cat_id?: number;
    gtins?: string;
    good_ids?: string;
    format?: FileFormat;
}

//10.8
export interface GetFullProductInfoResponse {
    apiversion: number; // Номер версии API метода

    result?: Array<{
        // Массив, содержащий информацию о штрих-кодах
        identified_by: Array<{
            value: string; // Значение идентификатора упаковки
            type: string; // Тип идентификатора: "gtin", "barcode"
            multiplier: number; // Количество товаров в упаковке
            level: string; // Тип упаковки: "trade-unit", "box"
        }>;

        good_id: number; // Идентификатор товара
        good_name: string; // Наименование товара
        good_img: string; // Изображение товара

        // Массив категорий
        categories: Array<{
            cat_id: number; // Идентификатор категории
            cat_name: string; // Наименование категории
        }>;

        party_brand_id?: string; // Идентификатор бренда для торговой сети
        brand_id: number; // Идентификатор товарного знака
        brand_name: string; // Наименование товарного знака

        good_rating: number; // Рейтинг товара

        // Массив с изображениями
        good_images: Array<{
            photo_type: PhotoType;
            photo_date: string; // Дата создания фотографии. Формат: yyyy-MM-ddTHH:mm:ss.SSS'Z
            photo_url: string; // Ссылка на изображение
            barcode?: string; // Штрих-код или артикул товара
        }>;

        // Массив атрибутов
        good_attrs: Array<{
            attr_id: number; // Идентификатор атрибута
            attr_name: string; // Наименование атрибута
            attr_value_id?: number; // Идентификатор значения атрибута
            attr_value: string; // Значение атрибута
            value_id: number; // Идентификатор значения атрибута
            attr_value_type: string; // Тип значения атрибута
            attr_group_id: number; // Идентификатор группы
            attr_group_name: string; // Наименование группы
            location_id?: number; // Идентификатор локации
            level?: string; // Уровень упаковки
            gtin?: string; // Код товара
            multiplier?: number; // Количество товаров в упаковке
        }>;

        good_url: string; // Ссылка на страницу товара

        is_kit: boolean; // Признак карточки товара типа "Комплект"
        is_set: boolean; // Признак карточки товара типа "Набор"

        // Массив вложений в набор
        set_gtins?: Array<{
            gtin: string; // Код товара
            quantity: number; // Количество вложений
        }>;

        good_status: string; // Технологический статус карточки товара
        create_date: string; // Дата создания карточки
        update_date: string; // Дата обновления карточки

        remainder_type: string; // Тип описания остатка: "full", "short", null
        is_tech_gtin: boolean; // Признак создания карточки товара с техническим кодом товара
        first_sign_date?: string; // Дата первого подписания карточки
    }>;
}

//10.9
export interface GetShortProductInfoResponse {
    apiversion: number;
    result: Array<{
        good_id: number;
        good_name: string;
        identified_by?: Array<{
            value: string;
            type: 'gtin' | 'barcode';
            multiplier?: number;
            level: 'trade-unit' | 'inner-pack' | 'box';
        }>;
        categories?: Array<{
            cat_id: number;
            cat_name: string;
        }>;
        good_images?: Array<{
            photo_type: PhotoType;

            photo_date: string; // yyyy-MM-ddTHH:mm:ss.SSS'Z'
            photo_url: string;
            barcode?: string;
        }>;
        good_attrs?: Array<{
            attr_id: number;
            attr_name: string;
            attr_value_id?: number;
            attr_value?: string;
            value_id?: number;
            attr_value_type?: string;
            attr_group_id?: number;
            attr_group_name?: string;
            location_id?: number;
            level?: string;
            gtin?: string;
            multiplier?: number;
        }>;
        is_kit: boolean;
        is_set: boolean;
        set_gtins?: Array<{
            gtin: string;
            quantity: number;
        }>;
        good_status: string;
        update_date: string; // date
        remainder_type?: 'full' | 'short' | null;
        is_tech_gtin: boolean;
        first_sign_date?: string; // date
        producer_inn?: string;
        producer_name?: string;
        brand_id?: number;
        brand_name?: string;
        good_rating?: number; // float
    }>;
}

//10.11
export interface SignProductCardBody {
    goodId: number;
    base64Xml: string;
    signature: string;
}
export interface SignProductCardResponse {
    apiversion: number;
    result?: {
        signed?: number[];
        errors: [
            {
                goodId?: number;
                message?: string;
            },
        ];
    };
}

//10.16
export interface GenerateGtinsParams {
    apikey?: string;
    quantity: string;
    exist?: boolean;
    supplier_key?: string;
}
export interface GenerateGtinsResponse {
    apiversion: number;
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

//10.17
export interface CreateOrUpdateProductBody {
    //Обязательный при обновлении карточки товара
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
            photo_type: PhotoType;
            photo_url: string;
            identifier?: string;
            identifier_type?: string;
        },
    ];
}
export interface CreateOrUpdateProductResponse {
    apiversion: number;
    result?: {
        feed_id?: string;
    };
}

//10.19
export interface SendCardForModerationParams {
    apikey?: string;
    good_id?: string;
    gtin?: string;
    inn?: string;
    format?: FileFormat;
}
export interface SendCardForModerationResponse {
    apiversion: number;
    result?: {
        good_id?: number;
        error?: string;
    };
}

//11.1
export interface SignInOmsBody {
    uuid: string;
    data: string;
    inn?: string;
}
export interface SignInOmsResponse {
    token: string;
}
