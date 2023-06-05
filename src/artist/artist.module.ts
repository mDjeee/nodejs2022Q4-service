import { Module } from '@nestjs/common';
import { ArtistService } from './artist.service';
import { ArtistController } from './artist.controller';
import { InMemoryArtistsStore } from './store/artist.storage';

@Module({
  controllers: [ArtistController],
  providers: [ArtistService, InMemoryArtistsStore],
})
export class ArtistModule {}
