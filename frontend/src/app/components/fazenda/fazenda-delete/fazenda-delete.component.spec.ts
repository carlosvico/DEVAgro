import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FazendaDeleteComponent } from './fazenda-delete.component';

describe('FazendaDeleteComponent', () => {
  let component: FazendaDeleteComponent;
  let fixture: ComponentFixture<FazendaDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FazendaDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FazendaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
