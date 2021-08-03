import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProgressModalComponent } from './edit-progress-modal.component';

describe('EditProgressModalComponent', () => {
  let component: EditProgressModalComponent;
  let fixture: ComponentFixture<EditProgressModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProgressModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProgressModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
