import { Injectable } from '@nestjs/common';
import { AlbumsStore } from '../interfaces/album-storage.interface';
import { IAlbum } from '../interfaces/album.interface';
import { CreateAlbumDto } from '../dto/create-album.dto';
import { v4 as uuid } from 'uuid';
import { UpdateAlbumDto } from '../dto/update-album.dto';

@Injectable()
export class InMemoryAlbumsStore implements AlbumsStore {
  private albums: IAlbum[] = [];

  create(params: CreateAlbumDto): IAlbum {
    const album = {
      id: uuid(),
      ...params,
    };
    this.albums.push(album);
    return album;
  }

  getAll() {
    return this.albums;
  }

  findById(id: string) {
    return this.albums.find((album) => album.id === id);
  }

  update(id: string, params: UpdateAlbumDto) {
    this.albums = this.albums.map((album) => {
      if (album.id === id) {
        return Object.assign(album, {
          ...params,
        });
      } else {
        return album;
      }
    });
    return this.findById(id);
  }

  delete(id: string) {
    this.albums = this.albums.filter((album) => album.id !== id);
  }
}
