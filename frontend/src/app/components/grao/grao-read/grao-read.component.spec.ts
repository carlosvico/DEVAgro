import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraoReadComponent } from './grao-read.component';

describe('GraoReadComponent', () => {
  let component: GraoReadComponent;
  let fixture: ComponentFixture<GraoReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraoReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
