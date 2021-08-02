import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewProjectCardComponent } from './preview-project-card.component';

describe('ProjectCardComponent', () => {
  let component: PreviewProjectCardComponent;
  let fixture: ComponentFixture<PreviewProjectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewProjectCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewProjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
