import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Playlist, Prisma } from '@prisma/client';

@Injectable()
export class PlaylistService {
  constructor(private prisma: PrismaService) {}

  async playlist(
    PlaylistWhereUniqueInput: Prisma.PlaylistWhereUniqueInput,
  ): Promise<Playlist | null> {
    return this.prisma.playlist.findUnique({
      where: PlaylistWhereUniqueInput,
      include: {
        videos: true,
      },
    });
  }

  async playlists(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PlaylistWhereUniqueInput;
    where?: Prisma.PlaylistWhereInput;
    orderBy?: Prisma.PlaylistOrderByInput;
  }): Promise<Playlist[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.playlist.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createPlaylist(data: Prisma.PlaylistCreateInput): Promise<Playlist> {
    return this.prisma.playlist.create({
      data,
    });
  }

  async updatePlaylist(params: {
    where: Prisma.PlaylistWhereUniqueInput;
    data: Prisma.PlaylistUpdateInput;
  }): Promise<Playlist> {
    const { where, data } = params;
    return this.prisma.playlist.update({
      data,
      where,
    });
  }

  async deletePlaylist(
    where: Prisma.PlaylistWhereUniqueInput,
  ): Promise<Playlist> {
    return this.prisma.playlist.delete({
      where,
    });
  }
}
