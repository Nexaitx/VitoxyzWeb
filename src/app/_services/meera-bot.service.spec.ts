import { TestBed } from '@angular/core/testing';

import { MeeraBotService } from './meera-bot.service';

describe('MeeraBotService', () => {
  let service: MeeraBotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeeraBotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
