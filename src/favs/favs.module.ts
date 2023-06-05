import { Module } from '@nestjs/common';
import { FavsService } from './favs.service';
import { FavsController } from './favs.controller';
import { InMemoryFavsStore } from './store/favs.storage';

@Module({
  controllers: [FavsController],
  providers: [FavsService, InMemoryFavsStore],
})
export class FavsModule {}
