import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { InMemoryDB } from 'src/db/db';

@Injectable()
export class AlbumService {
  constructor(private storage: InMemoryDB) {}
  create(createAlbumDto: CreateAlbumDto) {
    return this.storage.createAlbum(createAlbumDto);
  }

  findAll() {
    return this.storage.getAllAlbums();
  }

  findOne(id: string) {
    return this.storage.findAlbumById(id);
  }

  update(id: string, updateAlbumDto: UpdateAlbumDto) {
    return this.storage.updateAlbum(id, updateAlbumDto);
  }

  remove(id: string) {
    return this.storage.deleteAlbum(id);
  }
}
