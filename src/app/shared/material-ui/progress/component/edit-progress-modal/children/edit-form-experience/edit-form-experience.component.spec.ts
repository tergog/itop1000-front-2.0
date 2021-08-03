import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormExperienceComponent } from './edit-form-experience.component';

describe('EditFormExperienceComponent', () => {
  let component: EditFormExperienceComponent;
  let fixture: ComponentFixture<EditFormExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFormExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFormExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
