import { Module } from '@nestjs/common';
import { HonestSignCardModule } from './card';
import { HonestSignAuthModule } from './auth';
import { HonestSignCisModule } from './cis';

@Module({
    imports: [HonestSignAuthModule, HonestSignCardModule, HonestSignCisModule],
    exports: [HonestSignAuthModule, HonestSignCardModule, HonestSignCisModule],
})
export class HonestSignModule {}
