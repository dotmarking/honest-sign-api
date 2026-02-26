import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { HonestSignCardService } from './honest-sign-card.service';

@Module({
    imports: [
        HttpModule.register({
            baseURL: 'https://апи.национальный-каталог.рф',
            timeout: 5000,
        }),
    ],
    providers: [HonestSignCardService],
    exports: [HonestSignCardService],
})
export class HonestSignCardModule {}
