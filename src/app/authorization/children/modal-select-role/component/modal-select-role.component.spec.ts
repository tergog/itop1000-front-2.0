import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSelectRoleComponent } from './modal-select-role.component';

describe('ModalSelectRoleComponent', () => {
  let component: ModalSelectRoleComponent;
  let fixture: ComponentFixture<ModalSelectRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSelectRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSelectRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
