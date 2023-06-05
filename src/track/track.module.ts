import { Module } from '@nestjs/common';
import { TrackService } from './track.service';
import { TrackController } from './track.controller';
import { InMemoryTracksStore } from './store/track.store';

@Module({
  controllers: [TrackController],
  providers: [TrackService, InMemoryTracksStore],
})
export class TrackModule {}
