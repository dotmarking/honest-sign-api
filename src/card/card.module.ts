import { HttpModule, HttpService } from '@nestjs/axios';
import { DynamicModule, Module } from '@nestjs/common';
import { CardApiService } from './card.service';

@Module({})
export class CardApiModule {
    static register(): DynamicModule {
        return {
            module: CardApiModule,
            imports: [
                HttpModule.register({
                    baseURL: 'https://апи.национальный-каталог.рф',
                    timeout: 5000,
                    global: true,
                }),
            ],
            providers: [CardApiService, HttpService],
            exports: [CardApiService],
        };
    }
}
