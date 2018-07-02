import { TestBed, inject } from '@angular/core/testing';

import { ItemServiceService } from './item-service.service';

describe('ItemServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemServiceService]
    });
  });

  it('should be created', inject([ItemServiceService], (service: ItemServiceService) => {
    expect(service).toBeTruthy();
  }));
});
