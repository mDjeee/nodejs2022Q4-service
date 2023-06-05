import { Module } from '@nestjs/common';
import { AritstService } from './aritst.service';
import { AritstController } from './aritst.controller';

@Module({
  controllers: [AritstController],
  providers: [AritstService]
})
export class AritstModule {}
