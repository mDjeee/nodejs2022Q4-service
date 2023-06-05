import { Injectable } from '@nestjs/common';
import { TracksStore } from '../interfaces/track-storage.interface';
import { ITrack } from '../interfaces/track.interface';
import { CreateTrackDto } from '../dto/create-track.dto';
import { v4 as uuid } from 'uuid';
import { UpdateTrackDto } from '../dto/update-track.dto';

@Injectable()
export class InMemoryTracksStore implements TracksStore {
  private tracks: ITrack[] = [];

  create(params: CreateTrackDto) {
    const track = {
      id: uuid(),
      ...params,
    };

    this.tracks.push(track);

    return track;
  }

  getAll() {
    return this.tracks;
  }

  findById(id: string) {
    return this.tracks.find((track) => track.id === id);
  }

  update(id: string, params: UpdateTrackDto) {
    this.tracks = this.tracks.map((track) => {
      if (track.id === id) {
        return Object.assign(track, {
          ...params,
        });
      } else {
        return track;
      }
    });

    return this.findById(id);
  }

  delete(id: string) {
    this.tracks.filter((track) => track.id !== id);
  }
}
