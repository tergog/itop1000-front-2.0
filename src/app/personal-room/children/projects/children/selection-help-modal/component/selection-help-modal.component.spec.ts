import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionHelpModalComponent } from './selection-help-modal.component';

describe('SelectionHelpModalComponent', () => {
  let component: SelectionHelpModalComponent;
  let fixture: ComponentFixture<SelectionHelpModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectionHelpModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionHelpModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
