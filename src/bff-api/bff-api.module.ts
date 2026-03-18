import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { BffApiService } from './bff-api.service';

@Module({
    imports: [
        HttpModule.register({
            baseURL: 'https://markirovka.crpt.ru/bff-elk',
            timeout: 5000,
        }),
    ],
    providers: [BffApiService],
    exports: [BffApiService],
})
export class BffApiModule {}
