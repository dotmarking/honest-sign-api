import { Module } from '@nestjs/common';
import { TrueApiService } from './true-api.service';

@Module({
    providers: [TrueApiService],
    exports: [TrueApiService],
})
export class TrueApiModule {}
