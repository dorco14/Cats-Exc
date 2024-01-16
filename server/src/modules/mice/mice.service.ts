import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Mouse } from 'src/models/mouse/mouse.model';
import { CreateMouseDto } from 'src/types/dto/mouse.dto';
import { EntityRepository } from '@mikro-orm/postgresql';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Cat } from 'src/models/cat/cat.model';
import { CreateCatDto } from 'src/types/dto/cat.dto';

@Injectable()
export class MiceService {
  constructor(@InjectRepository(Mouse) private miceRepository: EntityRepository<Mouse>) { }


  async findAll(): Promise<Mouse[]> {
    return this.miceRepository.findAll();
  }

  async findOne(id: string): Promise<Mouse> {
    const mouse = await this.miceRepository.findOne(id);
    if (!mouse) {
      throw new NotFoundException(`Mouse with id ${id} not found`);
    }
    return mouse;
  }

  async findAllByCat(cat: Cat): Promise<Mouse[]> {
    return this.miceRepository.findAll({ where: { cat } });
  }

  async create(createMouseDto: CreateMouseDto): Promise<Mouse> {
    return this.miceRepository.create(createMouseDto);
  }
}