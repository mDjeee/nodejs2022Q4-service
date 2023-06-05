import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AritstService } from './aritst.service';
import { CreateAritstDto } from './dto/create-aritst.dto';
import { UpdateAritstDto } from './dto/update-aritst.dto';

@Controller('aritst')
export class AritstController {
  constructor(private readonly aritstService: AritstService) {}

  @Post()
  create(@Body() createAritstDto: CreateAritstDto) {
    return this.aritstService.create(createAritstDto);
  }

  @Get()
  findAll() {
    return this.aritstService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aritstService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAritstDto: UpdateAritstDto) {
    return this.aritstService.update(+id, updateAritstDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aritstService.remove(+id);
  }
}
