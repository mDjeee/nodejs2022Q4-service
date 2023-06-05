import { Injectable } from '@nestjs/common';
import { InMemoryDB } from 'src/db/db';

@Injectable()
export class FavsService {
  constructor(private store: InMemoryDB) {}

  findAll() {
    return this.store.getAllFavs();
  }

  createArtist(id: string) {
    return this.store.createFavArtist(id);
  }

  createAlbum(id: string) {
    return this.store.createFavAlbum(id);
  }

  createTrack(id: string) {
    return this.store.createFavTrack(id);
  }

  removeArtist(id: string) {
    return this.store.removeArtistFromFav(id);
  }

  removeAlbum(id: string) {
    return this.store.removeAlbumFromFav(id);
  }

  removeTrack(id: string) {
    return this.store.removeTrackFromFav(id);
  }
}
