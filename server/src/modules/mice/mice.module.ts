import { Module } from '@nestjs/common';
import { MiceService } from './mice.service';
import { MiceController } from './mice.controller';
import { DatabaseModule } from '../../database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [MiceController],
    providers: [MiceService],
})
export class MiceModule { }