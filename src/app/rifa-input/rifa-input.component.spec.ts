import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RifaInputComponent } from './rifa-input.component';

describe('RifaInputComponent', () => {
  let component: RifaInputComponent;
  let fixture: ComponentFixture<RifaInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RifaInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RifaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
