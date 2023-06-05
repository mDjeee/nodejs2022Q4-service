import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { InMemoryAlbumsStore } from './store/album.storage';
import { InMemoryTracksStore } from 'src/track/store/track.store';

@Injectable()
export class AlbumService {
  constructor(
    private storage: InMemoryAlbumsStore,
    private tracksStorage: InMemoryTracksStore,
  ) {}
  create(createAlbumDto: CreateAlbumDto) {
    return this.storage.create(createAlbumDto);
  }

  findAll() {
    return this.storage.getAll();
  }

  findOne(id: string) {
    return this.storage.findById(id);
  }

  update(id: string, updateAlbumDto: UpdateAlbumDto) {
    return this.storage.update(id, updateAlbumDto);
  }

  remove(id: string) {
    this.tracksStorage.removeAlbum(id);
    return this.storage.delete(id);
  }
}
