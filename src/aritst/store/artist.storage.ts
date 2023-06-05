import { Injectable } from '@nestjs/common';
import { IArtist } from '../interfaces/artist.interface';

@Injectable()
export class InMemoryArtistsStore {
  private artists: IArtist[] = [];
}
