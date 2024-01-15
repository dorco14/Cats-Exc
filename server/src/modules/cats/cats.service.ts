import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Cat } from 'src/models/cat/cat.model';
import { Mouse } from 'src/models/mouse/mouse.model';
import { CreateCatDto } from 'src/types/dto/cat.dto';
import { Op } from 'sequelize';

@Injectable()
export class CatsService {
  constructor(
    @Inject('CATS_REPOSITORY')
    private catsRepository: typeof Cat
  ) { }

  async create(createCatDto: CreateCatDto): Promise<Cat> {

    return this.catsRepository.create(createCatDto);
  }

  async findAll(filter: string): Promise<Cat[]> {
    const whereCondition = filter
      ? {
        [Op.or]: [
          { firstName: { [Op.iLike]: `%${filter}%` } },
          { lastName: { [Op.iLike]: `%${filter}%` } },
          { '$mice.name$': { [Op.iLike]: `%${filter}%` } },
        ],
      }
      : {};

    return this.catsRepository.findAll({
      where: whereCondition,
      include: [{ model: Mouse, as: 'mice' }]
    });
  }

  async findOne(id: number): Promise<Cat> {
    const cat = await this.catsRepository.findByPk(id, {
      include: [{ model: Mouse, as: 'mice' }],
    });
    if (!cat) {
      throw new NotFoundException(`Cat with id ${id} not found`);
    }
    return cat;
  }
}