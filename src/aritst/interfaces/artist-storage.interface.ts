import { CreateAritstDto } from '../dto/create-aritst.dto';
import { UpdateAritstDto } from '../dto/update-aritst.dto';
import { IArtist } from './artist.interface';

export interface ArtistsStore {
  create: (params: CreateAritstDto) => IArtist;
  update: (id: string, params: UpdateAritstDto) => IArtist;
  findById: (id: string) => IArtist | undefined;
  getAll: () => IArtist[] | [];
  delete: (id: string) => void;
}
