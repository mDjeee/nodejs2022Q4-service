import { CreateFavArtistDto } from '../dto/create-fav.dto';
import { UpdateFavDto } from '../dto/update-fav.dto';
import { IFav } from './fav.interface';

export interface FavsStore {
  createArtist: (params: CreateFavArtistDto) => IFav;
  update: (id: string, params: UpdateFavDto) => IFav;
  findById: (id: string) => IFav | undefined;
  getAll: () => IFav[] | [];
  delete: (id: string) => void;
}
