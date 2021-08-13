import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityMainComponent } from './security-main.component';

describe('SecurityMainComponent', () => {
  let component: SecurityMainComponent;
  let fixture: ComponentFixture<SecurityMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
