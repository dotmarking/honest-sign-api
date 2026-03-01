import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { HonestSignUserService } from './honest-sign-user.service';

@Module({
    imports: [
        HttpModule.register({
            baseURL: 'https://markirovka.crpt.ru/',
            timeout: 5000,
        }),
    ],
    providers: [HonestSignUserService],
    exports: [HonestSignUserService],
})
export class HonestSignUserModule {}
