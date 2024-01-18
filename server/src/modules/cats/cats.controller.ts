import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { CatsService } from './cats.service';
import type { Cat } from 'src/models/cat/cat.model';
import { CreateCatDto } from 'src/types/dto/cat.dto';

@Controller('cats')
export class CatsController {
    constructor(private readonly catService: CatsService) { }

    @Get()
    async findAll(@Query('name') name?: string): Promise<Cat[]> {
        try {
            return this.catService.findAll(name);
        } catch (error) {
            console.log(error);
        }
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Cat> {
        try {
            return this.catService.findOne(id);
        } catch (error) {
            console.log(error);
        }
    }

    @Post()
    async create(@Body() catData: CreateCatDto): Promise<Cat> {
        console.log(typeof (catData.description))
        try {
            return this.catService.create(catData);
        } catch (error) {
            console.log(error);
        }
    }
}