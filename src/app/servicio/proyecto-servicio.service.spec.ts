import { TestBed } from '@angular/core/testing';

import { ProyectoServicioService } from './proyecto-servicio.service';

describe('ProyectoServicioService', () => {
  let service: ProyectoServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProyectoServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
