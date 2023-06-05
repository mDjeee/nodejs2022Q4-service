import { Controller, Get, Post, Delete } from '@nestjs/common';
import { FavsService } from './favs.service';
import { ValidUUID } from 'src/decorators/uuid-param.decorator';

@Controller('favs')
export class FavsController {
  constructor(private readonly favsService: FavsService) {}

  @Get()
  findAll() {
    return this.favsService.findAll();
  }

  @Post('track/:id')
  addFavoriteTrack(@ValidUUID('id') id: string) {
    return this.favsService.createTrack(id);
  }

  @Delete('track/:id')
  removeFavoriteTrack(@ValidUUID('id') id: string) {
    return this.favsService.removeTrack(id);
  }

  @Post('album/:id')
  addFavoriteAlbum(@ValidUUID('id') id: string) {
    return this.favsService.createAlbum(id);
  }

  @Delete('album/:id')
  removeFavoriteAlbum(@ValidUUID('id') id: string) {
    return this.favsService.removeAlbum(id);
  }

  @Post('artist/:id')
  addFavoriteArtist(@ValidUUID('id') id: string) {
    return this.favsService.createArtist(id);
  }

  @Delete('artist/:id')
  removeFavoriteArtist(@ValidUUID('id') id: string) {
    return this.favsService.removeArtist(id);
  }
}
