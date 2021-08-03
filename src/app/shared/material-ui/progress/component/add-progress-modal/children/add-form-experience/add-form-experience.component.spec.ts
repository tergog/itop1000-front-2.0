import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormExperienceComponent } from './add-form-experience.component';

describe('AddFormExperienceComponent', () => {
  let component: AddFormExperienceComponent;
  let fixture: ComponentFixture<AddFormExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFormExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
