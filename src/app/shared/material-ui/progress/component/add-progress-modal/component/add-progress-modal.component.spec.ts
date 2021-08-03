import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProgressModalComponent } from './add-progress-modal.component';

describe('AddProgressModalComponent', () => {
  let component: AddProgressModalComponent;
  let fixture: ComponentFixture<AddProgressModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProgressModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProgressModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
