import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { Cat } from '../../models/cat/cat.model';

@Module({
    imports: [MikroOrmModule.forFeature([Cat])],
    controllers: [CatsController],
    providers: [CatsService],
})
export class CatsModule { }