import { TestBed } from '@angular/core/testing';

import { Textdavinciedit001Service } from './textdavinciedit001.service';

describe('Textdavinciedit001Service', () => {
  let service: Textdavinciedit001Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Textdavinciedit001Service);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
