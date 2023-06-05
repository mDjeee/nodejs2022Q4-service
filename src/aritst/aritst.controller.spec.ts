import { Test, TestingModule } from '@nestjs/testing';
import { AritstController } from './aritst.controller';
import { AritstService } from './aritst.service';

describe('AritstController', () => {
  let controller: AritstController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AritstController],
      providers: [AritstService],
    }).compile();

    controller = module.get<AritstController>(AritstController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
