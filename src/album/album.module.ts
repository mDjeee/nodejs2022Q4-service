import { Module } from '@nestjs/common';
import { AlbumService } from './album.service';
import { AlbumController } from './album.controller';
import { InMemoryDB } from 'src/db/db';

@Module({
  controllers: [AlbumController],
  providers: [AlbumService, InMemoryDB],
})
export class AlbumModule {}
