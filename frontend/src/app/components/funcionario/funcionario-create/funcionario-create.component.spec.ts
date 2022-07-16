import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { FuncionarioCreateComponent } from './funcionario-create.component';

describe('FuncionarioCreateComponent', () => {
  let component: FuncionarioCreateComponent;
  let fixture: ComponentFixture<FuncionarioCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionarioCreateComponent ],
      imports: [ MatSnackBarModule, HttpClientModule, RouterTestingModule ],
      providers: [ MatSnackBar, HttpClient ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
