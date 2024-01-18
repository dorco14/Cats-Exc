import { Module } from '@nestjs/common';
import { MiceService } from './mice.service';
import { DatabaseModule } from 'src/database/database.module';
import { MiceController } from './mice.controller';
import { miceProviders } from './mice.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [MiceController],
    providers: [MiceService , ...miceProviders],
})
export class MiceModule { }