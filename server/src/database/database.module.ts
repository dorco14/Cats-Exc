import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { dbConfig } from './database.config';

@Module({
  imports: [MikroOrmModule.forRoot(dbConfig)],
})
export class DatabaseModule { }