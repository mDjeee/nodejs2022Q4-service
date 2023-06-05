import { CreateAlbumDto } from '../dto/create-album.dto';
import { UpdateAlbumDto } from '../dto/update-album.dto';
import { IAlbum } from './album.interface';

export interface AlbumsStore {
  create: (params: CreateAlbumDto) => IAlbum;
  update: (id: string, params: UpdateAlbumDto) => IAlbum;
  findById: (id: string) => IAlbum | undefined;
  getAll: () => IAlbum[] | [];
  delete: (id: string) => void;
}
