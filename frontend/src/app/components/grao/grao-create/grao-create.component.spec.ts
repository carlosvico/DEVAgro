import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { GraoCreateComponent } from './grao-create.component';

describe('GraoCreateComponent', () => {
  let component: GraoCreateComponent;
  let fixture: ComponentFixture<GraoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraoCreateComponent ],
      imports: [ MatSnackBarModule, HttpClientModule, RouterTestingModule ],
      providers: [ MatSnackBar, HttpClient ]
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
