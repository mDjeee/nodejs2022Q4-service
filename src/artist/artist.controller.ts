import { Controller, Get, Post, Body, Patch, Delete } from '@nestjs/common';
import { ArtistService } from './artist.service';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { ValidUUID } from 'src/decorators/uuid-param.decorator';

@Controller('artist')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Post()
  create(@Body() createArtistDto: CreateArtistDto) {
    return this.artistService.create(createArtistDto);
  }

  @Get()
  findAll() {
    return this.artistService.findAll();
  }

  @Get(':id')
  findOne(@ValidUUID('id') id: string) {
    return this.artistService.findOne(id);
  }

  @Patch(':id')
  update(
    @ValidUUID('id') id: string,
    @Body() updateArtistDto: UpdateArtistDto,
  ) {
    return this.artistService.update(id, updateArtistDto);
  }

  @Delete(':id')
  remove(@ValidUUID('id') id: string) {
    return this.artistService.remove(id);
  }
}
