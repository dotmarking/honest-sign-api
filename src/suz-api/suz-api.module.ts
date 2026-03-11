import { Module } from '@nestjs/common';
import { SuzApiService } from './suz-api.service';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [
        HttpModule.register({
            baseURL: 'https://suzgrid.crpt.ru',
            timeout: 5000,
        }),
    ],
    providers: [SuzApiService],
    exports: [SuzApiService],
})
export class SuzApiModule {}
