import { Module } from '@nestjs/common';
import { TrackService } from './track.service';
import { TrackController } from './track.controller';
import { InMemoryDB } from 'src/db/db';

@Module({
  controllers: [TrackController],
  providers: [TrackService, InMemoryDB],
})
export class TrackModule {}
