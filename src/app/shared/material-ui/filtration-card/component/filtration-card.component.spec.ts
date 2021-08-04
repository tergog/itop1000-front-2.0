import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrationCardComponent } from './filtration-card.component';

describe('FiltrationCardComponent', () => {
  let component: FiltrationCardComponent;
  let fixture: ComponentFixture<FiltrationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrationCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
