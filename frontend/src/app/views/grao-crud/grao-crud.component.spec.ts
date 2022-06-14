import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraoCrudComponent } from './grao-crud.component';

describe('GraoCrudComponent', () => {
  let component: GraoCrudComponent;
  let fixture: ComponentFixture<GraoCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraoCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
