import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from 'src/models/cat/cat.model';

@Controller('cats')
export class CatsController {
    constructor(private readonly catService: CatsService) { }

    @Get()
    async findAll(@Query('name') name?: string): Promise<Cat[]> {
        return this.catService.findAll(name);
    }

    @Post()
    async create(@Body() catData: Cat): Promise<Cat> {
        return this.catService.create(catData);
    }
}