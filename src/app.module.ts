import { Module } from '@nestjs/common';
import { PlaylistController } from './controller/playlist.controller';
import { VideoController } from './controller/video.controller';
import { PlaylistService } from './service/playlist.service';
import { VideoService } from './service/video.service';
import { PrismaService } from './service/prisma.service';

@Module({
  imports: [],
  controllers: [PlaylistController, VideoController],
  providers: [PlaylistService, VideoService, PrismaService],
})
export class AppModule {}
