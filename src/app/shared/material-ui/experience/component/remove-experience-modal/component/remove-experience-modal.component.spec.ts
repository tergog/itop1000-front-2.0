import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveExperienceModalComponent } from './remove-experience-modal.component';

describe('RemoveExperienceModalComponent', () => {
  let component: RemoveExperienceModalComponent;
  let fixture: ComponentFixture<RemoveExperienceModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveExperienceModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveExperienceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
