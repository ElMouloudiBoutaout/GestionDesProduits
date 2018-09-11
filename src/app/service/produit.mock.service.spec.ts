import { TestBed } from '@angular/core/testing';

import { Produit.MockService } from './produit.mock.service';

describe('Produit.MockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Produit.MockService = TestBed.get(Produit.MockService);
    expect(service).toBeTruthy();
  });
});
