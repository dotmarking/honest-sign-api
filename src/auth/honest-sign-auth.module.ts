import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { HonestSignAuthService } from './honest-sign-auth.service';

@Module({
    imports: [
        HttpModule.registerAsync({
            useFactory: () => ({
                baseURL: 'https://markirovka.crpt.ru',
                timeout: 5000,
            }),
        }),
    ],
    providers: [HonestSignAuthService],
    exports: [HonestSignAuthService],
})
export class HonestSignAuthModule {}
