import { HttpService } from '@nestjs/axios';
import {
    CheckPermitExistsResponse,
    CreateCardResponse,
    GenerateGtinsResponse,
    GetAttributesResponse,
    GetBrandsListResponse,
    GetCategoryTreeResponse,
    GetOwnerCardsInfoRespnose,
    GetProductionCountries,
    SendCardForModerationResponse,
} from './interface/response/card.interface';
import {
    CheckPermitExistsRequest,
    GetAttributesRequest,
    GetBrandsListRequest,
    GetCardsInfoRequest,
    GetCategoryTreeRequest,
    GetOwnerCardsInfoRequest,
    SendCardForModerationRequest,
} from './interface/request/card.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HonestSignCardService {
    public constructor(private readonly httpService: HttpService) {}

    // 3.2.1
    public genereateGtins(quantity: string, honestSignToken: string) {
        return this.httpService.get<GenerateGtinsResponse>('/v3/generate-gtins', {
            params: quantity,
            headers: { Authorization: `Bearer ${honestSignToken}` },
        });
    }

    // 3.2.2
    public createCard(card: object, honestSignToken: string) {
        return this.httpService.post<CreateCardResponse>(
            '/v3/feed',
            { ...card },
            { headers: { Authorization: `Bearer ${honestSignToken}` } },
        );
    }

    // 3.2.5
    public sendCardForModeration(params: SendCardForModerationRequest, honestSignToken: string) {
        return this.httpService.get<SendCardForModerationResponse>('/v3/feed-moderation', {
            params,
            headers: { Authorization: `Bearer ${honestSignToken}` },
        });
    }

    // 3.1.1
    public getOwnerCardsInfo(params: GetOwnerCardsInfoRequest, honestSignToken: string) {
        return this.httpService.get<GetOwnerCardsInfoRespnose>('/v3/feed-product', {
            params,
            headers: { Authorization: `Bearer ${honestSignToken}` },
        });
    }

    // 3.1.2
    public getCardsInfo(params: GetCardsInfoRequest, honestSignToken: string) {
        return this.httpService.get<GetOwnerCardsInfoRespnose>('/v3/product', {
            params,
            headers: { Authorization: `Bearer ${honestSignToken}` },
        });
    }

    // 3.3.1
    public getCategoryTree(params: GetCategoryTreeRequest, honestSignToken: string) {
        return this.httpService.get<GetCategoryTreeResponse>('/v3/categories', {
            params,
            headers: { Authorization: `Bearer ${honestSignToken}` },
        });
    }

    // 3.3.2
    public getAttributes(params: GetAttributesRequest, honestSignToken: string) {
        return this.httpService.get<GetAttributesResponse>('/v3/attributes', {
            params,
            headers: { Authorization: `Bearer ${honestSignToken}` },
        });
    }

    // 3.3.3
    public getProductionCountries(honestSignToken: string) {
        return this.httpService.get<GetProductionCountries>('/v3/dictionary/isocountry', {
            headers: { Authorization: `Bearer ${honestSignToken}` },
        });
    }

    // 3.3.4
    public getBrandsList(params: GetBrandsListRequest, honestSignToken: string) {
        return this.httpService.get<GetBrandsListResponse>('/v3/brands', {
            params,
            headers: { Authorization: `Bearer ${honestSignToken}` },
        });
    }

    // 3.3.5
    public checkPermitExists(document: CheckPermitExistsRequest, honestSignToken: string) {
        return this.httpService.post<CheckPermitExistsResponse>('/v3/rd/suggest', document, {
            headers: { Authorization: `Bearer ${honestSignToken}` },
        });
    }
}
