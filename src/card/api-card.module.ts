import { HttpModule } from '@nestjs/axios';
import { DynamicModule, Global, Module } from '@nestjs/common';
import { CardApiService } from './api-card.service';

@Global()
@Module({})
export class CardApiModule {
    static forRoot(): DynamicModule {
        return {
            module: CardApiModule,
            imports: [
                HttpModule.registerAsync({
                    useFactory: () => ({
                        baseURL: 'https://апи.национальный-каталог.рф',
                        timeout: 10000,
                    }),
                }),
            ],
            providers: [CardApiService],
            exports: [CardApiService, HttpModule],
        };
    }
}
