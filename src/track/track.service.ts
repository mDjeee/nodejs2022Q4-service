import { Injectable } from '@nestjs/common';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { InMemoryDB } from 'src/db/db';

@Injectable()
export class TrackService {
  constructor(private store: InMemoryDB) {}
  create(createTrackDto: CreateTrackDto) {
    return this.store.createTrack(createTrackDto);
  }

  findAll() {
    return this.store.getAllTracks();
  }

  findOne(id: string) {
    return this.store.findTrackById(id);
  }

  update(id: string, updateTrackDto: UpdateTrackDto) {
    return this.store.updateTrack(id, updateTrackDto);
  }

  remove(id: string) {
    return this.store.deleteTrack(id);
  }
}
