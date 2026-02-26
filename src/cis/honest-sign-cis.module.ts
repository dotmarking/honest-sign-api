import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { HonestSignCisService } from './honest-sign-cis.service';

@Module({
    imports: [
        HttpModule.registerAsync({
            useFactory: () => ({
                baseURL: 'https://suzgrid.crpt.ru',
                timeout: 5000,
            }),
        }),
    ],
    providers: [HonestSignCisService],
    exports: [HonestSignCisService],
})
export class HonestSignCisModule {}
