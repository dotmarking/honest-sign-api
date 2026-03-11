import { Module } from '@nestjs/common';
import { TrueApiModule } from './true-api/true-api.module';
import { SuzApiModule } from './suz-api';

@Module({
    imports: [TrueApiModule, SuzApiModule],
    exports: [TrueApiModule, SuzApiModule],
})
export class HonestSignModule {}
