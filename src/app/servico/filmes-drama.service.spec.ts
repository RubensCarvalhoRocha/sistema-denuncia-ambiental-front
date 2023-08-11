import { TestBed } from '@angular/core/testing';

import { FilmesDramaService } from './filmes-drama.service';

describe('FilmesDramaService', () => {
  let service: FilmesDramaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmesDramaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
