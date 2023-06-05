import { Injectable } from '@nestjs/common';
import { InMemoryFavsStore } from './store/favs.storage';

@Injectable()
export class FavsService {
  constructor(private store: InMemoryFavsStore) {}

  findAll() {
    return this.store.getAll();
  }

  createArtist(id: string) {
    return this.store.createArtist(id);
  }

  createAlbum(id: string) {
    return this.store.createAlbum(id);
  }

  createTrack(id: string) {
    return this.store.createTrack(id);
  }

  removeArtist(id: string) {
    return this.store.removeArtist(id);
  }

  removeAlbum(id: string) {
    return this.store.removeAlbum(id);
  }

  removeTrack(id: string) {
    return this.store.removeTrack(id);
  }
}
