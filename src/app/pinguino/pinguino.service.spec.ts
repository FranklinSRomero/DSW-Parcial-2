/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PinguinoService } from './pinguino.service';

describe('Service: Pinguino', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PinguinoService]
    });
  });

  it('should ...', inject([PinguinoService], (service: PinguinoService) => {
    expect(service).toBeTruthy();
  }));
});
