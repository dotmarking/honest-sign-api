import { Module } from '@nestjs/common';
import { HonestSignCardModule } from './card';
import { HonestSignAuthModule } from './auth';
import { TrueApiModule } from './true-api/true-api.module';
import { SuzApiModule } from './suz-api';

@Module({
    imports: [HonestSignAuthModule, HonestSignCardModule, TrueApiModule, SuzApiModule],
    exports: [HonestSignAuthModule, HonestSignCardModule, TrueApiModule, SuzApiModule],
})
export class HonestSignModule {}
