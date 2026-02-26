import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CisService } from './cis.service';

@Module({
    imports: [
        HttpModule.registerAsync({
            useFactory: () => ({
                baseURL: 'https://suzgrid.crpt.ru',
                timeout: 5000,
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
        }),
    ],
    providers: [CisService],
})
export class CisModule {}
