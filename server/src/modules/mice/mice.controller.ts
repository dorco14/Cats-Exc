import { Controller, Get, Post, ValidationPipe, Param, Body } from '@nestjs/common';
import { MiceService } from './mice.service';
import { Mouse } from 'src/models/mouse/mouse.model';

@Controller('mice')
export class MiceController {
  constructor(private readonly miceService: MiceService) { }

  @Post()
  async create(@Body(new ValidationPipe()) mouse: Mouse): Promise<Mouse> {
    try {

      return this.miceService.create(mouse);
    } catch (error) {
      console.log('error');
    }
  }

  @Get()
  async findAll(): Promise<Mouse[]> {
    try {
      return this.miceService.findAll();
    } catch (error) {
      console.log(error);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Mouse> {
    try {
      return this.miceService.findOne(id);
    } catch (error) {
      console.log(error);
    }
  }

  @Get('cat/:catId')
  async findAllByCat(@Param('catId') catId: number): Promise<Mouse[]> {
    try {
      return this.miceService.findAllByCat(catId);
    } catch (error) {
      console.log(error);
    }
  }
}