import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CardApiService } from './card.service';

@Module({
    imports: [
        HttpModule.register({
            baseURL: 'https://апи.национальный-каталог.рф',
            timeout: 5000,
        }),
    ],
    providers: [CardApiService],
    exports: [CardApiService],
})
export class CardApiModule {}
