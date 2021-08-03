import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormEducationComponent } from './edit-form-education.component';

describe('EditFormEducationComponent', () => {
  let component: EditFormEducationComponent;
  let fixture: ComponentFixture<EditFormEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFormEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFormEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
