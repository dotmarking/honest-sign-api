import { Module } from '@nestjs/common';
import { TrueApiModule } from './true-api/true-api.module';
import { SuzApiModule } from './suz-api';
import { BffApiModule } from './bff-api/bff-api.module';

@Module({
    imports: [TrueApiModule, SuzApiModule, BffApiModule],
    exports: [TrueApiModule, SuzApiModule, BffApiModule],
})
export class HonestSignAPIModule {}
