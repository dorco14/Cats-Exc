import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { MiceService } from './mice.service';
import { Mouse } from 'src/models/mouse/mouse.model';

@Controller('mice')
export class MiceController {
  constructor(private readonly miceService: MiceService) {}

  @Post()
  async create(@Body() mouse: Mouse): Promise<Mouse> {
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