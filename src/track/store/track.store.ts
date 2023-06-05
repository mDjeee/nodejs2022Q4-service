import { Injectable } from '@nestjs/common';
import { TracksStore } from '../interfaces/track-storage.interface';
import { ITrack } from '../interfaces/track.interface';
import { CreateTrackDto } from '../dto/create-track.dto';
import { v4 as uuid } from 'uuid';
import { UpdateTrackDto } from '../dto/update-track.dto';
import { InMemoryFavsStore } from 'src/favs/store/favs.storage';

@Injectable()
export class InMemoryTracksStore implements TracksStore {
  private tracks: ITrack[] = [];

  constructor(private favsStore: InMemoryFavsStore) {}

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
    this.favsStore.removeTrack(id);
    this.tracks.filter((track) => track.id !== id);
  }

  removeArtist(id: string) {
    this.tracks = this.tracks.map((track) => {
      if (track.artistId === id) {
        return {
          artistId: null,
          ...track,
        };
      } else {
        return track;
      }
    });
  }

  removeAlbum(id: string) {
    this.tracks = this.tracks.map((track) => {
      if (track.albumId === id) {
        return {
          albumId: null,
          ...track,
        };
      } else {
        return track;
      }
    });
  }
}
