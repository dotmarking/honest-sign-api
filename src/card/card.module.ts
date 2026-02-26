import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CardService } from './card.service';

@Module({
    imports: [
        HttpModule.registerAsync({
            useFactory: () => ({
                baseURL: 'https://апи.национальный-каталог.рф',
                timeout: 5000,
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
        }),
    ],
    providers: [CardService],
})
export class CardsModule {}
