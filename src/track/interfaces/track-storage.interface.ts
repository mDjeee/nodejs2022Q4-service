import { CreateTrackDto } from '../dto/create-track.dto';
import { UpdateTrackDto } from '../dto/update-track.dto';
import { ITrack } from './track.interface';

export interface TracksStore {
  create: (params: CreateTrackDto) => ITrack;
  update: (id: string, params: UpdateTrackDto) => ITrack;
  findById: (id: string) => ITrack | undefined;
  getAll: () => ITrack[] | [];
  delete: (id: string) => void;
}
