import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormEducationComponent } from './add-form-education.component';

describe('AddFormEducationComponent', () => {
  let component: AddFormEducationComponent;
  let fixture: ComponentFixture<AddFormEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFormEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
