import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraoDeleteComponent } from './grao-delete.component';

describe('GraoDeleteComponent', () => {
  let component: GraoDeleteComponent;
  let fixture: ComponentFixture<GraoDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraoDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
