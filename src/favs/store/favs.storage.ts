import { Injectable } from '@nestjs/common';
import { IFav } from '../interfaces/fav.interface';
import { InMemoryArtistsStore } from 'src/artist/store/artist.storage';
import { InMemoryAlbumsStore } from 'src/album/store/album.storage';
import { InMemoryTracksStore } from 'src/track/store/track.store';

@Injectable()
export class InMemoryFavsStore {
  private favs: IFav;

  constructor(
    private artistsStore: InMemoryArtistsStore,
    private albumsStore: InMemoryAlbumsStore,
    private tracksStore: InMemoryTracksStore,
  ) {}

  createArtist(id: string) {
    this.favs.artists.push(id);
    return 'Succsessfully added';
  }

  createAlbum(id: string) {
    this.favs.albums.push(id);
    return 'Succsessfully added';
  }

  createTrack(id: string) {
    this.favs.tracks.push(id);
    return 'Succsessfully added';
  }

  removeArtist(id: string) {
    const albums = this.favs.albums.filter((albumId) => albumId !== id);
    this.favs = {
      albums,
      ...this.favs,
    };
  }

  removeAlbum(id: string) {
    const artists = this.favs.artists.filter((artistId) => artistId !== id);
    this.favs = {
      artists,
      ...this.favs,
    };
  }

  removeTrack(id: string) {
    const tracks = this.favs.tracks.filter((tracksId) => tracksId !== id);
    this.favs = {
      tracks,
      ...this.favs,
    };
  }

  getAll() {
    const artists = this.favs.artists.map((artistId) =>
      this.artistsStore.findById(artistId),
    );

    const albums = this.favs.albums.map((albumId) =>
      this.albumsStore.findById(albumId),
    );

    const tracks = this.favs.tracks.map((trackId) =>
      this.tracksStore.findById(trackId),
    );

    return {
      artists,
      albums,
      tracks,
    };
  }
}
