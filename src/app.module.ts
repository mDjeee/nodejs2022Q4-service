import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ArtistsModule } from './artists/artists.module';
import { AritstModule } from './aritst/aritst.module';

@Module({
  imports: [UsersModule, ArtistsModule, AritstModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
