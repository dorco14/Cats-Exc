import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { HttpStatus, HttpException } from '@nestjs/common';
import { CatsService } from './cats.service';
import type { Cat } from 'src/models/cat/cat.model';
import { CreateCatDto } from 'src/types/dto/cat.dto';

@Controller('cats')
export class CatsController {
    constructor(private readonly catService: CatsService) { }

    @Get()
    async findAll(@Query('name') name?: string): Promise<Cat[]> {
        return this.catService.findAll(name);
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Cat> {
        return this.catService.findOne(id);
    }

    @Post()
    async create(@Body() catData: CreateCatDto): Promise<Cat> {
        return this.catService.create(catData);
    }
}