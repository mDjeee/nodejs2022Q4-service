import { CreateArtistDto } from '../dto/create-artist.dto';
import { UpdateArtistDto } from '../dto/update-artist.dto';
import { IArtist } from './artist.interface';

export interface ArtistsStore {
  create: (params: CreateArtistDto) => IArtist;
  update: (id: string, params: UpdateArtistDto) => IArtist;
  findById: (id: string) => IArtist | undefined;
  getAll: () => IArtist[] | [];
  delete: (id: string) => void;
}
