import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarFotoComponent } from './adicionar-foto.component';

describe('AdicionarFotoComponent', () => {
  let component: AdicionarFotoComponent;
  let fixture: ComponentFixture<AdicionarFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarFotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
