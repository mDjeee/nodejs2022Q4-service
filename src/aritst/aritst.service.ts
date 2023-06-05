import { Injectable } from '@nestjs/common';
import { CreateAritstDto } from './dto/create-aritst.dto';
import { UpdateAritstDto } from './dto/update-aritst.dto';

@Injectable()
export class AritstService {
  create(createAritstDto: CreateAritstDto) {
    return 'This action adds a new aritst';
  }

  findAll() {
    return `This action returns all aritst`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aritst`;
  }

  update(id: number, updateAritstDto: UpdateAritstDto) {
    return `This action updates a #${id} aritst`;
  }

  remove(id: number) {
    return `This action removes a #${id} aritst`;
  }
}
