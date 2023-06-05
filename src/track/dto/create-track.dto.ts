import { IsInt, IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateTrackDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  artistId: string | null; // refers to Artist

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  albumId: string | null; // refers to Album

  @IsNotEmpty()
  @IsInt()
  duration: number; // integer number
}
