import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAcceptRuleComponent } from './modal-accept-rule.component';

describe('ModalAcceptRuleComponent', () => {
  let component: ModalAcceptRuleComponent;
  let fixture: ComponentFixture<ModalAcceptRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAcceptRuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAcceptRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
