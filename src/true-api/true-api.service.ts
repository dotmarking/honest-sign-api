import { HttpService } from '@nestjs/axios';
import {
    CreateOrUpdateProductBody,
    CreateOrUpdateProductResponse,
    ErrorMessage,
    GenerateGtinsParams,
    GetAttributesParams,
    GetAuthKeyResponse,
    GetBrandsParams,
    GetBrandsResponse,
    GetCategoryTreeParams,
    GetCategoryTreeResponse,
    GetCisesFilter,
    GetCisesPublicInfoParams,
    GetCisesPublicInfoResponse,
    GetCisesPublicShortInfoResponse,
    GetCisesResponse,
    GetProductInfoParams,
    GetOwnerProductGtinsParams,
    GetOwnerProductGtinsResponse,
    GetParticipantEdoIdResponse,
    GetProductGroupBalanceResponse,
    GetProductInfoByGtinParams,
    GetProductInfoByGtinResponse,
    HonestSignAccessToken,
    SendCardForModerationParams,
    SendCardForModerationResponse,
    SignInOmsBody,
    SignInOmsResponse,
    SignProductCardBody,
    SignProductCardResponse,
    VerificationCodesBody,
    VerificationCodesResponse,
} from './types/true-api.interface';

export class TrueApiService {
    public constructor(private readonly httpService: HttpService) {}

    /**
     * @documentation TRUE API 1.5.1
     * @description Метод используется для получения UUID (идентификатора текущей аутентификации) и сгенерированных случайных данных,
     * которые в дальнейшем подписываются участником оборота товаров и передаются в метод получения ключа сессии при единой аутентификации для дальнейшего получения токена по УКЭП
     */
    public async getAuthKey() {
        return this.httpService.get<GetAuthKeyResponse>('/api/v3/true-api/auth/key');
    }

    /**
     * @documentation TRUE API 3.8.1
     * @description Метод предназначен для получения значения баланса лицевых счетов, запрашиваемого УОТ по каждой товарной группе.
     * Выполнить запрос можно только для получения собственного баланса денежных средств.
     */
    public async getAllProductGroupsBalance(token: HonestSignAccessToken) {
        return this.httpService.get<GetProductGroupBalanceResponse[] | ErrorMessage>(
            '/api/v3/true-api/elk/product-groups/balance/all',
            { headers: { Authorization: `Bearer: ${token}` } },
        );
    }

    /**
     * @documentation TRUE API 3.8.2
     * @description Метод предназначен для получения значения баланса лицевого счета, запрашиваемого УОТ по одной товарной группы.
     * Выполнить запрос можно только для получения информации о собственном балансе денежных средств.
     */
    public async getProductGroupBalance(token: HonestSignAccessToken, productGroupId: number) {
        return this.httpService.get<GetProductGroupBalanceResponse | ErrorMessage>(
            '/api/v3/true-api/elk/product-groups/balance',
            { headers: { Authorization: `Bearer: ${token}` }, params: productGroupId },
        );
    }

    /**
     * @documentation TRUE API 5.1.1
     * @description Метод позволяет получить информацию по КИ / КиЗ, числящихся на участнике оборота товаров по заданным фильтрам.
     * Максимальный лимит кодов в ответе с учётом пагинации 10 000.
     */
    public getCises(token: HonestSignAccessToken, filter: GetCisesFilter) {
        return this.httpService.post<GetCisesResponse>('/api/v4/true-api/cises/search', filter, {
            headers: { Authorization: `Bearer ${token}` },
        });
    }

    /**
     * @documentation TRUE API 5.1.2
     * @description Метод возвращает подробную информацию о запрашиваемом списке КИ / КиЗ: в одном запросе указывается как один КИ / КиЗ, так и несколько (не более 1000).
     * Также метод возвращает информацию о КИ товаров, отгруженных из стран ЕАЭС.
     */
    public getCisesPublicInfo(
        token: HonestSignAccessToken,
        cises: string[],
        params?: GetCisesPublicInfoParams,
    ) {
        return this.httpService.post<GetCisesPublicInfoResponse>(
            '/api/v4/true-api/cises/info',
            cises,
            {
                headers: { Authorization: `Bearer ${token}` },
                params,
            },
        );
    }

    /**
     * @documentation TRUE API 5.1.3
     * @description Метод возвращает информацию о запрашиваемом списке кодов. Предназначен для проверки кодов перед отгрузкой / приёмкой товаров всех товарных групп,
     * используя информацию только из «cis» («Массив КИ»).
     */
    public getCisesPublicShortInfo(
        token: HonestSignAccessToken,
        cises: string[],
        params?: GetCisesPublicInfoParams,
    ) {
        return this.httpService.post<GetCisesPublicShortInfoResponse>(
            '/api/v4/true-api/cises/short/list',
            cises,
            {
                headers: { Authorization: `Bearer ${token}` },
                params,
            },
        );
    }

    /**
     * @documentation TRUE API 5.1.7
     * @description Метод предназначен для проверки наличия в ГИС МТ указанного КИ с криптографической частью.
     * Метод ограничен по частоте запросов (допустимая частота запросов метода - 2 секунды) и количеству КИ в запросе (максимальное количество КИ в запросе - 1000)
     * и не предназначен для вызова с ККТ при сканировании КИ при розничной реализации.
     */
    public verificationCodes(token: HonestSignAccessToken, codes: VerificationCodesBody) {
        return this.httpService.post<VerificationCodesResponse>(
            '/api/v4/true-api/cises/check',
            codes,
            {
                headers: { Authorization: `Bearer ${token}` },
            },
        );
    }

    /**
     * @documentation TRUE API 5.6.1
     * @description В результате успешного выполнения запроса по списку кодов товаров в ответе возвращается массив с информацией о товарах по запрошенным КИ.
     */
    public getProductInfoByGtin(token: HonestSignAccessToken, params: GetProductInfoByGtinParams) {
        return this.httpService.get<GetProductInfoByGtinResponse>('/api/v4/true-api/product/info', {
            headers: { Authorization: `Bearer ${token}` },
            params,
        });
    }

    /**
     * @documentation TRUE API 5.6.2
     * @description Метод возвращает список кодов товаров с возможностью указания параметров фильтрации в запросе.
     */
    public getOwnerProductGtins(token: HonestSignAccessToken, params?: GetOwnerProductGtinsParams) {
        return this.httpService.get<GetOwnerProductGtinsResponse>('/api/v4/true-api/product/gtin', {
            headers: { Authorization: `Bearer ${token}` },
            params,
        });
    }

    /**
     * @documentation TRUE API 9.1
     * @description Метод предназначен для получения идентификатора абонента в ЭДО Лайт: в одном запросе указывается ИНН одного участника оборота товаров.
     */
    public getParticipantEdoId(token: HonestSignAccessToken, inn: string) {
        return this.httpService.get<GetParticipantEdoIdResponse>(
            `/api/v4/true-api/edo/inn/${inn}`,
            {
                headers: { Authorization: `Bearer ${token}` },
            },
        );
    }

    /**
     * @documentation TRUE API 9.2
     * @description Метод предназначен для получения ZIP-архива входящих либо исходящих документов ЭДО (УПД, УПДи, УКД, УКДи) с подписями и квитанциями обмена с подписями.
     */
    public downloadEdoDocumentZIP(token: HonestSignAccessToken, documentId: string) {
        return this.httpService.get<Buffer | ErrorMessage>(
            `/elk/outgoing-documents/${documentId}`,
            {
                headers: { Authorization: `Bearer ${token}` },
            },
        );
    }

    /**
     * @documentation TRUE API 10.2 / НАЦИОНАЛЬНЫЙ КАТАЛОГ
     * @description Метод возвращает перечень атрибутов для создания карточки товара с указанным кодом ТН ВЭД или идентификатором категории.
     * Если не указан код ТН ВЭД или идентификатор категории, возвращается полный список атрибутов доступных для запрашивающего аккаунта.
     */
    public getAttributes(token: HonestSignAccessToken, params?: GetAttributesParams) {
        return this.httpService.get<GetCategoryTreeResponse>('/api/v3/true-api/nk/attributes', {
            headers: { Authorization: `Bearer: ${token}` },
            params,
        });
    }

    /**
     * @documentation TRUE API 10.3 / НАЦИОНАЛЬНЫЙ КАТАЛОГ
     * @description Метод предназначен для получения списка торговых марок. При отправке ID торговой сети в ответе возвращаются данные о брендах.
     */
    public getBrands(token: HonestSignAccessToken, params?: GetBrandsParams) {
        return this.httpService.get<GetBrandsResponse>('/api/v3/true-api/nk/attributes', {
            headers: { Authorization: `Bearer: ${token}` },
            params,
        });
    }

    /**
     * @documentation TRUE API 10.7 / НАЦИОНАЛЬНЫЙ КАТАЛОГ
     * @description Метод предназначен для получения дерева категорий без корня дерева. В ответе возвращается список данных о каждом элементе дерева категорий.
     */
    public getCategoryTree(token: HonestSignAccessToken, params?: GetCategoryTreeParams) {
        return this.httpService.get<GetCategoryTreeResponse>('/api/v3/true-api/nk/categories', {
            headers: { Authorization: `Bearer: ${token}` },
            params,
        });
    }

    /**
     * @documentation TRUE API 10.8 / НАЦИОНАЛЬНЫЙ КАТАЛОГ
     * @description Метод полную информацию о продукте (товаре) и требует обязательного указания одного из следующих параметров: идентификатор товара или код товара (штрих-код) товара.
     */
    public getFullProductInfo(token: HonestSignAccessToken, params: GetProductInfoParams) {
        return this.httpService.get('/api/v3/true-api/nk/product', {
            headers: { Authorization: `Bearer: ${token}` },
            params,
        });
    }

    /**
     * @documentation TRUE API 10.9 / НАЦИОНАЛЬНЫЙ КАТАЛОГ
     * @description Метод возвращает краткую информацию о продукте (товаре) и требует обязательного указания одного из следующих параметров: идентификатор товара или код товара (штрих-код) товара.
     */
    public getShortProductInfo(token: HonestSignAccessToken, params: GetProductInfoParams) {
        return this.httpService.get('/api/v3/true-api/nk/short-product', {
            headers: { Authorization: `Bearer: ${token}` },
            params,
        });
    }

    /**
     * @documentation TRUE API 10.11 / НАЦИОНАЛЬНЫЙ КАТАЛОГ
     * @description Метод предназначен для подписи карточки товара или нескольких карточек с помощью сертификата в формате PKCS#7.
     * Отличается от «Метода получения массива ID прошедших валидацию товаров» (/nk/feed-product-sign) тем, что из содержимого карточки товара в формате * .xml исключается подпись,
     * которая при использовании текущего метода передаётся отдельным параметром в запросе. Данные кодируются в BASE64.
     * @base64Xml Карточка товара в формате * .xml, закодированная в BASE64
     * @signature Откреплённая подпись, закодированная в BASE64, соответствующая типу CAdES в формате PKCS#7
     */
    public signProductCard(token: HonestSignAccessToken, body: SignProductCardBody) {
        return this.httpService.post<SignProductCardResponse | ErrorMessage>(
            '/api/v3/true-api/nk/feed-product-sign-pkcs',
            body,
            {
                headers: { Authorization: `Bearer: ${token}` },
            },
        );
    }

    /**
     * @documentation TRUE API 10.16 / НАЦИОНАЛЬНЫЙ КАТАЛОГ
     * @description Метод предназначен для генерации и получения списка черновиков кодов товаров.
     * При отправке числа новых кодов товаров и (при необходимости) ключа поставщика / производителя товаров в ответе возвращается число доступных в течение месяца для генерации кодов товаров,
     * число уже сгенерированных кодов товаров, список новых кодов товаров.
     */
    public generateGtins(token: HonestSignAccessToken, params: GenerateGtinsParams) {
        return this.httpService.get('/api/v3/true-api/nk/generate-gtins', {
            headers: { Authorization: `Bearer: ${token}` },
            params,
        });
    }

    /**
     * @documentation TRUE API 10.17 / НАЦИОНАЛЬНЫЙ КАТАЛОГ
     * @description Метод даёт возможность компаниям-владельцам товаров создавать и обновлять товары.
     * Создание и обновление карточек товаров осуществляется при помощи фидов — пакетов обновлений, формируемых на стороне пользователя.
     */
    public createOrUpdateProduct(
        token: HonestSignAccessToken,
        body: CreateOrUpdateProductBody,
        params?: object,
    ) {
        return this.httpService.post<CreateOrUpdateProductResponse>(
            '/api/v3/true-api/nk/feed',
            body,
            {
                headers: { Authorization: `Bearer: ${token}` },
                params,
            },
        );
    }

    /**
     * @documentation TRUE API 10.19 / НАЦИОНАЛЬНЫЙ КАТАЛОГ
     * @description Метод отправляет на модерацию, для указанных в запросе good_id или код товара + ИНН, созданные ранее карточки товаров в статусе «Черновик».
     */
    public sendCardForModeration(
        token: HonestSignAccessToken,
        params: SendCardForModerationParams,
    ) {
        return this.httpService.get<SendCardForModerationResponse>(
            '/api/v3/true-api/nk/feed-moderation',
            {
                headers: { Authorization: `Bearer: ${token}` },
                params,
            },
        );
    }

    /**
     * @documentation TRUE API 11.1 / СУЗ
     * @description Метод используется для получения маркера безопасности (токена аутентификации) в СУЗ.
     */
    public signInOms(omsConnection: string, body: SignInOmsBody) {
        return this.httpService.post<SignInOmsResponse>(
            `/api/v3/true-api/auth/simpleSignIn/${omsConnection}`,
            body,
        );
    }
}
