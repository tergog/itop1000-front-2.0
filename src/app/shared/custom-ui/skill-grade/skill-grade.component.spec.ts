import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillGradeComponent } from './skill-grade.component';

describe('SkillGradeComponent', () => {
  let component: SkillGradeComponent;
  let fixture: ComponentFixture<SkillGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillGradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
