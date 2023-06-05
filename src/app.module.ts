import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ArtistModule } from './artist/artist.module';
import { AlbumModule } from './album/album.module';
import { TrackModule } from './track/track.module';
import { FavsModule } from './favs/favs.module';
import { InMemoryDB } from './db/db';

@Module({
  imports: [UsersModule, ArtistModule, AlbumModule, TrackModule, FavsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
