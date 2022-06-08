import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraoCreateComponent } from './grao-create.component';

describe('GraoCreateComponent', () => {
  let component: GraoCreateComponent;
  let fixture: ComponentFixture<GraoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraoCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
