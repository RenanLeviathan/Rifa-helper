import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RifaNumerosComponent } from './rifa-numeros.component';

describe('RifaNumerosComponent', () => {
  let component: RifaNumerosComponent;
  let fixture: ComponentFixture<RifaNumerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RifaNumerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RifaNumerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
