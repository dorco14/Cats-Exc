import { Injectable, NotFoundException } from '@nestjs/common';
import { EntityRepository } from '@mikro-orm/postgresql';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Cat } from 'src/models/cat/cat.model';
import { CreateCatDto } from 'src/types/dto/cat.dto';
import { Mouse } from 'src/models/mouse/mouse.model';

@Injectable()
export class CatsService {
  constructor(@InjectRepository(Cat) private catRepository: EntityRepository<Cat>) { }

  async findAll(filter?: string): Promise<Cat[]> {
    if (filter) {
      return await this.catRepository.find({
        $or: [
          { firstName: { $ilike: `%${filter}%` } },
          { lastName: { $ilike: `%${filter}%` } },
          { mice: { $in: await this.catRepository.createQueryBuilder().select('*').from(Mouse).where({ name: { $ilike: `%${filter}%` } }) } }
        ]
      }, { populate: ['mice'] });
    };

    return this.catRepository.findAll({ populate: ['mice'] });
  };

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const cat = this.catRepository.create(createCatDto);
    try {
      await this.catRepository.insert(cat);
      return cat
    } catch (error) {
      throw new Error('Failed to insert cat');
    }
  }
}