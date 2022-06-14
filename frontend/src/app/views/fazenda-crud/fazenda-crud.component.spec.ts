import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FazendaCrudComponent } from './fazenda-crud.component';

describe('FazendaCrudComponent', () => {
  let component: FazendaCrudComponent;
  let fixture: ComponentFixture<FazendaCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FazendaCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FazendaCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
