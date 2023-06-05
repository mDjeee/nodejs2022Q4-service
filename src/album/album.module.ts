import { Module } from '@nestjs/common';
import { AlbumService } from './album.service';
import { AlbumController } from './album.controller';
import { InMemoryAlbumsStore } from './store/album.storage';

@Module({
  controllers: [AlbumController],
  providers: [AlbumService, InMemoryAlbumsStore],
})
export class AlbumModule {}
