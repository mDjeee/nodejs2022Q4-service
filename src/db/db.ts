/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { IAlbum } from 'src/album/interfaces/album.interface';
import { CreateArtistDto } from 'src/artist/dto/create-artist.dto';
import { UpdateArtistDto } from 'src/artist/dto/update-artist.dto';
import { IArtist } from 'src/artist/interfaces/artist.interface';
import { IFav } from 'src/favs/interfaces/fav.interface';
import { CreateTrackDto } from 'src/track/dto/create-track.dto';
import { UpdateTrackDto } from 'src/track/dto/update-track.dto';
import { ITrack } from 'src/track/interfaces/track.interface';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { IUser } from 'src/users/interfaces/user.interface';
import { CreateAlbumDto } from 'src/album/dto/create-album.dto';
import { UpdateAlbumDto } from 'src/album/dto/update-album.dto';

@Injectable()
export class InMemoryDB {
  private users: IUser[] = [];
  private albums: IAlbum[] = [];
  private artists: IArtist[] = [];
  private tracks: ITrack[] = [];
  private favs: IFav = {
    artists: [],
    albums: [],
    tracks: [],
  };

  createAlbum(params: CreateAlbumDto): IAlbum {
    const album = {
      id: uuid(),
      ...params,
    };
    this.albums.push(album);
    return album;
  }

  getAllAlbums() {
    return this.albums;
  }

  findAlbumById(id: string) {
    return this.albums.find((album) => album.id === id);
  }

  updateAlbum(id: string, params: UpdateAlbumDto) {
    this.albums = this.albums.map((album) => {
      if (album.id === id) {
        return Object.assign(album, {
          ...params,
        });
      } else {
        return album;
      }
    });
    return this.findAlbumById(id);
  }

  deleteAlbum(id: string) {
    this.removeAlbumFromTracks(id);
    this.removeAlbumFromFav(id);
    this.albums = this.albums.filter((album) => album.id !== id);
  }

  removeArtistFromAlbum(id: string) {
    this.albums = this.albums.map((album) => {
      if (album.artistId === id) {
        return {
          artistId: null,
          ...album,
        };
      } else {
        return album;
      }
    });
  }

  // Implementation for Artists

  getAllArtists() {
    return this.artists;
  }

  findArtistById(id: string) {
    return this.artists.find((artist) => artist.id === id);
  }

  createArtist(params: CreateArtistDto) {
    const newArtist: IArtist = {
      ...params,
      id: uuid(),
    };

    this.artists.push(newArtist);

    return newArtist;
  }

  deleteArtist(id: string) {
    this.removeArtistFromTracks(id);
    this.removeArtistFromAlbum(id);
    this.removeArtistFromFav(id);
    this.artists = this.artists.filter((artist) => artist.id !== id);
  }

  updateArtist(id: string, params: UpdateArtistDto) {
    const grammy = params.grammy;
    const name = params.name;
    this.artists = this.artists.map((artist) => {
      if (artist.id === id) {
        return Object.assign(artist, {
          name,
          grammy,
        });
      } else {
        return artist;
      }
    });
    return this.findArtistById(id);
  }

  createTrack(params: CreateTrackDto) {
    const track = {
      id: uuid(),
      ...params,
    };

    this.tracks.push(track);

    return track;
  }

  getAllTracks() {
    return this.tracks;
  }

  findTrackById(id: string) {
    return this.tracks.find((track) => track.id === id);
  }

  updateTrack(id: string, params: UpdateTrackDto) {
    this.tracks = this.tracks.map((track) => {
      if (track.id === id) {
        return Object.assign(track, {
          ...params,
        });
      } else {
        return track;
      }
    });

    return this.findTrackById(id);
  }

  deleteTrack(id: string) {
    this.removeTrackFromFav(id);
    this.tracks.filter((track) => track.id !== id);
  }

  removeArtistFromTracks(id: string) {
    this.tracks = this.tracks.map((track) => {
      if (track.artistId === id) {
        return {
          artistId: null,
          ...track,
        };
      } else {
        return track;
      }
    });
  }

  removeAlbumFromTracks(id: string) {
    this.tracks = this.tracks.map((track) => {
      if (track.albumId === id) {
        return {
          albumId: null,
          ...track,
        };
      } else {
        return track;
      }
    });
  }

  getAllUsers() {
    return this.users.map(({ password, ...rest }) => rest);
  }

  findUserById(id: string) {
    const user = this.users.find((user) => user.id === id);
    if (user) {
      const { password, ...rest } = user; // Exclude user password from the result
      return rest;
    }
    return undefined;
  }

  create(params: CreateUserDto) {
    const now = Date.now();
    const newUser: IUser = {
      ...params,
      id: uuid(),
      version: 1,
      createdAt: now,
      updatedAt: now,
    };

    this.users.push(newUser);

    return newUser;
  }

  deleteUser(id: string) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
    }
  }

  updateUser(id: string, params: UpdateUserDto) {
    const user: IUser = this.users.find((user) => user.id === id);

    const isOldPasswordCorrect = params.oldPassword === user.password;

    if (!isOldPasswordCorrect) {
      throw new HttpException(
        'Old password is incorrect',
        HttpStatus.FORBIDDEN,
      );
    }

    if (user) {
      user.password = params.newPassword;
      user.version += 1;
      user.updatedAt = Date.now();
      const { password, ...rest } = user;
      return rest;
    }
    return undefined;
  }

  createFavArtist(id: string) {
    this.favs.artists.push(id);
    return 'Succsessfully added';
  }

  createFavAlbum(id: string) {
    this.favs.albums.push(id);
    return 'Succsessfully added';
  }

  createFavTrack(id: string) {
    this.favs.tracks.push(id);
    return 'Succsessfully added';
  }

  removeArtistFromFav(id: string) {
    const albums = this.favs.albums.filter((albumId) => albumId !== id);
    this.favs = {
      albums,
      ...this.favs,
    };
  }

  removeAlbumFromFav(id: string) {
    const artists = this.favs.artists.filter((artistId) => artistId !== id);
    this.favs = {
      artists,
      ...this.favs,
    };
  }

  removeTrackFromFav(id: string) {
    const tracks = this.favs.tracks.filter((tracksId) => tracksId !== id);
    this.favs = {
      tracks,
      ...this.favs,
    };
  }

  getAllFavs() {
    const artists = this.favs.artists.map((artistId) =>
      this.findArtistById(artistId),
    );

    const albums = this.favs.albums.map((albumId) =>
      this.findAlbumById(albumId),
    );

    const tracks = this.favs.tracks.map((trackId) =>
      this.findTrackById(trackId),
    );

    return {
      artists,
      albums,
      tracks,
    };
  }
}
