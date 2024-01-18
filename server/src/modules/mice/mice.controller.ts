import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { MiceService } from './mice.service';
import { Mouse } from 'src/models/mouse/mouse.model';
import { CreateMouseDto } from 'src/types/dto/mouse.dto';

@Controller('mice')
export class MiceController {
  constructor(private readonly miceService: MiceService) { }

  @Post()
  async create(@Body() mouse: CreateMouseDto): Promise<Mouse> {
    return this.miceService.create(mouse);
  }

  @Get()
  async findAll(): Promise<Mouse[]> {
    return this.miceService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Mouse> {
    return this.miceService.findOne(id);
  }

  @Get('cat/:catId')
  async findAllByCat(@Param('catId') catId: number): Promise<Mouse[]> {
    return this.miceService.findAllByCat(catId);
  }
}