import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

@Module({
    imports: [
        HttpModule.register({
            baseURL: 'https://markirovka.crpt.ru/',
            timeout: 5000,
        }),
    ],
})
export class HonestSignUserModule {}
