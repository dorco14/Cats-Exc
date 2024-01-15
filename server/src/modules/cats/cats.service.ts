import { Injectable, NotFoundException } from '@nestjs/common';
import { EntityRepository } from '@mikro-orm/postgresql';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Cat } from 'src/models/cat/cat.model';
import { CreateCatDto } from 'src/types/dto/cat.dto';

@Injectable()
export class CatsService {
  constructor(@InjectRepository(Cat) private catRepository: EntityRepository<Cat>) { }

  async findAll(): Promise<Cat[]> {
    return this.catRepository.findAll({ populate: ['mice'] });
  }

  async findOne(id: number): Promise<Cat> {
    const cat = await this.catRepository.findOne(id, { populate: ['mice'] });
    if (!cat) {
      throw new NotFoundException(`Cat with id ${id} not found`);
    }
    return cat;
  }

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const cat = this.catRepository.create(createCatDto);
    return cat;
  }
}