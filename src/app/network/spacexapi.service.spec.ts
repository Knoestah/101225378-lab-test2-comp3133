import { TestBed } from '@angular/core/testing';

import { SpacexapiService } from './spacexapi.service';

describe('SpacexapiService', () => {
  let service: SpacexapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpacexapiService);
  });

  it('created', () => {
    expect(service).toBeTruthy();
  });
});