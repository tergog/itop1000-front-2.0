import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveProgressModalComponent } from './remove-progress-modal.component';

describe('RemoveProgressModalComponent', () => {
  let component: RemoveProgressModalComponent;
  let fixture: ComponentFixture<RemoveProgressModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveProgressModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveProgressModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
