import { Test, TestingModule } from '@nestjs/testing';
import { AritstService } from './aritst.service';

describe('AritstService', () => {
  let service: AritstService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AritstService],
    }).compile();

    service = module.get<AritstService>(AritstService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
