import { Test, TestingModule } from '@nestjs/testing';
import { ComplexesController } from './complexes.controller';

describe('ComplexesController', () => {
  let controller: ComplexesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComplexesController],
    }).compile();

    controller = module.get<ComplexesController>(ComplexesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
