import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { MiceService } from './mice.service';
import { Mouse } from 'src/models/mouse/mouse.model';

@Controller('mice')
export class MiceController {
  constructor(private readonly miceService: MiceService) { }

  @Post()
  async create(@Body() mouse: Mouse): Promise<Mouse> {
    return this.miceService.create(mouse);
  }

  @Get()
  async findAll(): Promise<Mouse[]> {
    return this.miceService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Mouse> {
    return this.miceService.findOne(id);
  }
}