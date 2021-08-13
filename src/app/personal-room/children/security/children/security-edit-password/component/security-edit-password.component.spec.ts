import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityEditPasswordComponent } from './security-edit-password.component';

describe('SecurityEditPasswordComponent', () => {
  let component: SecurityEditPasswordComponent;
  let fixture: ComponentFixture<SecurityEditPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityEditPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityEditPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
