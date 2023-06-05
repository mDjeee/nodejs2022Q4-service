import { Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { InMemoryDB } from 'src/db/db';

@Injectable()
export class ArtistService {
  constructor(private storage: InMemoryDB) {}
  create(createArtistDto: CreateArtistDto) {
    return this.storage.createArtist(createArtistDto);
  }

  findAll() {
    return this.storage.getAllArtists();
  }

  findOne(id: string) {
    return this.storage.findArtistById(id);
  }

  update(id: string, updateArtistDto: UpdateArtistDto) {
    return this.storage.updateArtist(id, updateArtistDto);
  }

  remove(id: string) {
    return this.storage.deleteArtist(id);
  }
}
