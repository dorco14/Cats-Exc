import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from 'src/models/cat/cat.model';

@Controller('cats')
export class CatsController {
    constructor(private readonly catService: CatsService) { }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Cat> {
        return this.catService.findOne(id);
    }

    @Post()
    async create(@Body() catData: Cat): Promise<Cat> {
        return this.catService.create(catData);
    }
}