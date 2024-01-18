import { Injectable , Inject , NotFoundException} from '@nestjs/common';
import { Mouse } from 'src/models/mouse/mouse.model';
import { CreateMouseDto } from 'src/types/dto/mouse.dto';

@Injectable()
export class MiceService {
  constructor(
    @Inject('MICE_REPOSITORY')
    private miceRepository: typeof Mouse
  ) {}

  async findAll(): Promise<Mouse[]> {
    return this.miceRepository.findAll();
  }

  async findOne(id: number): Promise<Mouse> {
    const mouse = await this.miceRepository.findByPk(id, {
      include: [{ model: Mouse, as: 'cat' }],
    });
    if (!mouse) {
      throw new NotFoundException(`Mouse with id ${id} not found`);
    }
    return mouse;
  }

  async findAllByCat(catId: number): Promise<Mouse[]> {
    return this.miceRepository.findAll({ where: { catId } });
  }

  async create(createMouseDto: CreateMouseDto): Promise<Mouse> {
    return this.miceRepository.create(createMouseDto);
  }
}