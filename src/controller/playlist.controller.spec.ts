import { Test, TestingModule } from '@nestjs/testing';
import { PlaylistController } from './playlist.controller';
import { PlaylistService } from '../service/playlist.service';

describe('PlaylistController', () => {
  let playlistController: PlaylistController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PlaylistController],
      providers: [PlaylistService],
    }).compile();

    playlistController = app.get<PlaylistController>(PlaylistController);
  });

  describe('root', () => {
    // it('should return "Hello World!"', () => {
    //   expect(playlistController.getHello()).toBe('Hello World!');
    // });
  });
});
