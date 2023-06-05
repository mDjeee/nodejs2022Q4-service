import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ArtistsModule } from './artists/artists.module';
import { AritstModule } from './aritst/aritst.module';
import { ArtistModule } from './artist/artist.module';

@Module({
  imports: [UsersModule, ArtistsModule, AritstModule, ArtistModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
