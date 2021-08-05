import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksCommentComponent } from './works-comment.component';

describe('WorksCommentComponent', () => {
  let component: WorksCommentComponent;
  let fixture: ComponentFixture<WorksCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorksCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
