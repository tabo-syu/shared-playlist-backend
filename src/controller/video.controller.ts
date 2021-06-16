import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { VideoService } from '../service/video.service';
import { Video as VideoModel } from '@prisma/client';

@Controller()
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Get('videos')
  async getAllVideo(): Promise<VideoModel[]> {
    return this.videoService.videos({});
  }

  @Post('videos')
  async postVideo(
    @Body() videoData: { playlistId: string; name: string },
  ): Promise<VideoModel> {
    const { name, playlistId } = videoData;
    return this.videoService.createVideo({
      name,
      playlist: {
        connect: { id: Number(playlistId) },
      },
    });
  }

  @Get('videos/:id')
  async getVideoById(@Param('id') id: string): Promise<VideoModel> {
    return this.videoService.video({ id: Number(id) });
  }

  @Delete('videos/:id')
  async deleteVideoById(@Param('id') id: string): Promise<VideoModel> {
    return this.videoService.deleteVideo({ id: Number(id) });
  }
}
