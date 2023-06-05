import { Controller, Get, Post, Body, Put, Delete } from '@nestjs/common';
import { TrackService } from './track.service';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { ValidUUID } from 'src/decorators/uuid-param.decorator';

@Controller('track')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @Post()
  create(@Body() createTrackDto: CreateTrackDto) {
    return this.trackService.create(createTrackDto);
  }

  @Get()
  findAll() {
    return this.trackService.findAll();
  }

  @Get(':id')
  async findOne(@ValidUUID('id') id: string) {
    return this.trackService.findOne(id);
  }

  @Put(':id')
  update(@ValidUUID('id') id: string, @Body() updateTrackDto: UpdateTrackDto) {
    return this.trackService.update(id, updateTrackDto);
  }

  @Delete(':id')
  remove(@ValidUUID('id') id: string) {
    return this.trackService.remove(id);
  }
}
