import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CardApiService } from './card.service';

@Module({
    imports: [
        HttpModule.register({
            baseURL: 'xn--https://-86g4ftd.xn----7sbabas4ajkhfocclk9d3cvfsa.xn--p1ai',
            timeout: 5000,
        }),
    ],
    providers: [CardApiService],
    exports: [CardApiService],
})
export class CardApiModule {}
