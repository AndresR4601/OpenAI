import { TestBed } from '@angular/core/testing';

import { ModerationsService } from './moderations.service';

describe('ModerationsService', () => {
  let service: ModerationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModerationsService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
