import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisSearchComponent } from './pais-search.component';

describe('PaisSearchComponent', () => {
  let component: PaisSearchComponent;
  let fixture: ComponentFixture<PaisSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
