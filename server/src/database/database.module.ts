import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Cat } from 'src/models/cat/cat.model';
import { Mouse } from 'src/models/mouse/mouse.model';
import MikroOrmConfig from 'src/mikro-orm.config';

@Module({
  imports: [
    MikroOrmModule.forRoot(MikroOrmConfig),
    MikroOrmModule.forFeature({ entities: [Cat, Mouse] })
  ],
  exports: [MikroOrmModule]
})
export class DatabaseModule { }