import { Injectable } from '@nestjs/common';
import { CreateTrackDto } from './dto/create-track.dto';
import { UpdateTrackDto } from './dto/update-track.dto';
import { InMemoryTracksStore } from './store/track.store';

@Injectable()
export class TrackService {
  constructor(private store: InMemoryTracksStore) {}
  create(createTrackDto: CreateTrackDto) {
    return this.store.create(createTrackDto);
  }

  findAll() {
    return this.store.getAll();
  }

  findOne(id: string) {
    return this.store.findById(id);
  }

  update(id: string, updateTrackDto: UpdateTrackDto) {
    return this.store.update(id, updateTrackDto);
  }

  remove(id: string) {
    return this.store.delete(id);
  }
}
