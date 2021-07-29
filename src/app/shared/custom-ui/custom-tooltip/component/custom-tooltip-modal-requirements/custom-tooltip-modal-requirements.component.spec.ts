import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTooltipModalRequirementsComponent } from './custom-tooltip-modal-requirements.component';

describe('CustomTooltipModalRequirementsComponent', () => {
  let component: CustomTooltipModalRequirementsComponent;
  let fixture: ComponentFixture<CustomTooltipModalRequirementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomTooltipModalRequirementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTooltipModalRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
