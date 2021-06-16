import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PlaylistService } from '../service/playlist.service';
import { Playlist as PlaylistModel } from '@prisma/client';

@Controller()
export class PlaylistController {
  constructor(private readonly playlistService: PlaylistService) {}

  @Get('playlists')
  async getAllPlaylist(): Promise<PlaylistModel[]> {
    return this.playlistService.playlists({});
  }

  @Post('playlists')
  async postPlaylist(
    @Body() playlistData: { name: string },
  ): Promise<PlaylistModel> {
    const { name } = playlistData;
    return this.playlistService.createPlaylist({ name });
  }

  @Get('playlists/:id')
  async getPlaylistById(@Param('id') id: string): Promise<PlaylistModel> {
    return this.playlistService.playlist({ id: Number(id) });
  }

  @Put('playlists/:id')
  async updatePlaylistById(
    @Param('id') id: string,
    @Body() playlistData: { name: string },
  ): Promise<PlaylistModel> {
    const { name } = playlistData;
    return this.playlistService.updatePlaylist({
      where: { id: Number(id) },
      data: { name },
    });
  }

  @Delete('playlists/:id')
  async deletePlaylistById(@Param('id') id: string): Promise<PlaylistModel> {
    return this.playlistService.deletePlaylist({ id: Number(id) });
  }
}
