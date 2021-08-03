import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLanguageModalComponent } from './delete-language-modal.component';

describe('DeleteLanguageModalComponent', () => {
  let component: DeleteLanguageModalComponent;
  let fixture: ComponentFixture<DeleteLanguageModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteLanguageModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteLanguageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
