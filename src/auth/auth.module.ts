import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AuthService } from './auth.service';

@Module({
    imports: [
        HttpModule.registerAsync({
            useFactory: () => ({
                baseURL: 'https://markirovka.crpt.ru',
                timeout: 5000,
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
        }),
    ],
    providers: [AuthService],
})
export class AuthModule {}
