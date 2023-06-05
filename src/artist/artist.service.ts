import { Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { InMemoryArtistsStore } from './store/artist.storage';
import { InMemoryTracksStore } from 'src/track/store/track.store';

@Injectable()
export class ArtistService {
  constructor(
    private storage: InMemoryArtistsStore,
    private tracksStorage: InMemoryTracksStore,
  ) {}
  create(createArtistDto: CreateArtistDto) {
    return this.storage.create(createArtistDto);
  }

  findAll() {
    return this.storage.getAll();
  }

  findOne(id: string) {
    return this.storage.findById(id);
  }

  update(id: string, updateArtistDto: UpdateArtistDto) {
    return this.storage.update(id, updateArtistDto);
  }

  remove(id: string) {
    return this.storage.delete(id);
  }

  private removeArtistFromTracks(id: string) {
    const tracks = this.tracksStorage.getAll();
  }
}
