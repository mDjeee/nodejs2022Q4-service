import { IsInt, IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateAlbumDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsInt()
  year: number;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  artistId: string | null; // refers to Artist
}
