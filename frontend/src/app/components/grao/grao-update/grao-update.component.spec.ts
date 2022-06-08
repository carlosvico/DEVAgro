import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraoUpdateComponent } from './grao-update.component';

describe('GraoUpdateComponent', () => {
  let component: GraoUpdateComponent;
  let fixture: ComponentFixture<GraoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraoUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
