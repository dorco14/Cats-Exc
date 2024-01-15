import { Injectable, NotFoundException } from '@nestjs/common';
import { EntityRepository } from '@mikro-orm/postgresql';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Cat } from 'src/models/cat/cat.model';
import { CreateCatDto } from 'src/types/dto/cat.dto';
import { Op } from 'sequelize';

// @Injectable()
// export class CatsService {
//   constructor(
//     @Inject('CATS_REPOSITORY')
//     private catsRepository: typeof Cat
//   ) { }

//   async create(createCatDto: CreateCatDto): Promise<Cat> {

//     return this.catsRepository.create(createCatDto);
//   }

//   async findAll(filter: string): Promise<Cat[]> {
//     const whereCondition = filter
//       ? {
//         [Op.or]: [
//           { firstName: { [Op.iLike]: `%${filter}%` } },
//           { lastName: { [Op.iLike]: `%${filter}%` } },
//           { '$mice.name$': { [Op.iLike]: `%${filter}%` } },
//         ],
//       }
//       : {};

//     return this.catsRepository.findAll({
//       where: whereCondition,
//       include: [{ model: Mouse, as: 'mice' }]
//     });

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