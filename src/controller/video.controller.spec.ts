import { Test, TestingModule } from '@nestjs/testing';
import { VideoController } from './video.controller';
import { VideoService } from '../service/video.service';

describe('VideoService', () => {
  let playlistController: VideoController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [VideoController],
      providers: [VideoService],
    }).compile();

    playlistController = app.get<VideoController>(VideoController);
  });

  describe('root', () => {
    // it('should return "Hello World!"', () => {
    //   expect(playlistController.getHello()).toBe('Hello World!');
    // });
  });
});
