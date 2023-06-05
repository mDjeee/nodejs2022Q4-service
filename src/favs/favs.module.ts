import { Module } from '@nestjs/common';
import { FavsService } from './favs.service';
import { FavsController } from './favs.controller';
import { InMemoryDB } from 'src/db/db';

@Module({
  controllers: [FavsController],
  providers: [FavsService, InMemoryDB],
})
export class FavsModule {}
