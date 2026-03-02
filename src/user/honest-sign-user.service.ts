import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { GetEdoIdResponse } from './types';

@Injectable()
export class HonestSignUserService {
    public constructor(private readonly httpService: HttpService) {}

    // 9.1
    public getEdoId(inn: string, honestSignToken: string) {
        return this.httpService.get<GetEdoIdResponse>(`api/v4/true-api/edo/inn/${inn}`, {
            headers: {
                Authorization: `Bearer ${honestSignToken}`,
            },
        });
    }
}
