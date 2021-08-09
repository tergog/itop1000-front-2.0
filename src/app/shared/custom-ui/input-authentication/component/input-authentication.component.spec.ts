import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAuthenticationComponent } from './input-authentication.component';

describe('InputAuthenticationComponent', () => {
  let component: InputAuthenticationComponent;
  let fixture: ComponentFixture<InputAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputAuthenticationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
