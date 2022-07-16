import { OverlayModule, Overlay } from '@angular/cdk/overlay';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { EmpresaCreateComponent } from './empresa-create.component';

describe('EmpresaCreateComponent', () => {
  let component: EmpresaCreateComponent;
  let fixture: ComponentFixture<EmpresaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresaCreateComponent ],
      imports: [ MatSnackBarModule, HttpClientModule, RouterTestingModule, OverlayModule ],
      providers: [ MatSnackBar, HttpClient, Overlay ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
