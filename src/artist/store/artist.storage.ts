import { Injectable } from '@nestjs/common';
import { IArtist } from '../interfaces/artist.interface';
import { ArtistsStore } from '../interfaces/artist-storage.interface';
import { CreateArtistDto } from '../dto/create-artist.dto';
import { v4 as uuid } from 'uuid';
import { UpdateArtistDto } from '../dto/update-artist.dto';

@Injectable()
export class InMemoryArtistsStore implements ArtistsStore {
  private artists: IArtist[] = [];

  getAll() {
    return this.artists;
  }

  findById(id: string) {
    return this.artists.find((artist) => artist.id === id);
  }

  create(params: CreateArtistDto) {
    const newArtist: IArtist = {
      ...params,
      id: uuid(),
    };

    this.artists.push(newArtist);

    return newArtist;
  }

  delete(id: string) {
    this.artists = this.artists.filter((artist) => artist.id === id);
  }

  update(id: string, params: UpdateArtistDto) {
    const artist = this.artists.find((artist) => artist.id === id);
    const updatedArtist = {
      ...params,
      ...artist,
    };
    return updatedArtist;
  }
}
