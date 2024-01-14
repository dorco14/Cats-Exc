import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { CatsModule } from './modules/cats/cats.module';
import { MiceModule } from './modules/mice/mice.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, CatsModule, MiceModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
