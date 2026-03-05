import { Module } from '@nestjs/common';
import { HonestSignCardModule } from './card';
import { HonestSignAuthModule } from './auth';
import { HonestSignCisModule } from './cis';
import { HonestSignUserModule } from './user/honest-sign-user.module';
import { TrueApiModule } from './true-api/true-api.module';

@Module({
    imports: [
        HonestSignAuthModule,
        HonestSignCardModule,
        HonestSignCisModule,
        HonestSignUserModule,
        TrueApiModule,
    ],
    exports: [
        HonestSignAuthModule,
        HonestSignCardModule,
        HonestSignCisModule,
        HonestSignUserModule,
        TrueApiModule,
    ],
})
export class HonestSignModule {}
