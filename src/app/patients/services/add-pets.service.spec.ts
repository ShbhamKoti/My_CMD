import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AddPetsService } from './add-pets.service';

describe('AddPetsService', () => {
  let service: AddPetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports:[HttpClientModule]});
    service = TestBed.inject(AddPetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
