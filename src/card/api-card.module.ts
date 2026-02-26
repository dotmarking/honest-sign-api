import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CardApiService } from './api-card.service';

@Module({ imports: [], providers: [CardApiService], exports: [CardApiService] })
export class CardApiModule {}
