import { Module } from '@nestjs/common';
import { HonestSignCardModule } from './card';
import { HonestSignAuthModule } from './auth';
import { HonestSignCisModule } from './cis';
import { HonestSignUserModule } from './user/honest-sign-user.module';

@Module({
    imports: [
        HonestSignAuthModule,
        HonestSignCardModule,
        HonestSignCisModule,
        HonestSignUserModule,
    ],
    exports: [
        HonestSignAuthModule,
        HonestSignCardModule,
        HonestSignCisModule,
        HonestSignUserModule,
    ],
})
export class HonestSignModule {}
