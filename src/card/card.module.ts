import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';
import { CardApiService } from './card.service';

@Global()
@Module({
    imports: [
        HttpModule.registerAsync({
            useFactory: () => ({
                baseURL: 'https://апи.национальный-каталог.рф',
                timeout: 5000,
            }),
        }),
    ],
    providers: [CardApiService],
    exports: [CardApiService],
})
export class CardApiModule {}
