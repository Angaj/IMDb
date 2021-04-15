import { TestBed } from '@angular/core/testing';

import { RestAPIService } from './restAPI.service';

describe('RestservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestAPIService = TestBed.get(RestAPIService);
    expect(service).toBeTruthy();
  });
});
