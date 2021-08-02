import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CAddExperienceModalConfigList } from '../add-experiance-modal.config';

@Component({
  selector: 'app-add-experience-modal',
  templateUrl: './add-experience-modal.component.html',
  styleUrls: ['./add-experience-modal.component.scss']
})
export class AddExperienceModalComponent {
  public addModalFormGroup: FormGroup;
public addExperienceModalConfig = CAddExperienceModalConfigList;

  constructor(private formBuilder: FormBuilder) {
    this.addModalFormGroup = this.formBuilder.group({
      companyName: this.formBuilder.control({ value: 'Deal Design', disabled: false }, [Validators.required]),
      jobTitle: this.formBuilder.control({ value: 'Job Title', disabled: false }, [Validators.required]),
      positionTitle: this.formBuilder.control({ value: 'Position Title', disabled: false }, [Validators.required]),
      jobDescription: this.formBuilder.control({ value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', disabled: false }, [Validators.required]),
      dateFrom: this.formBuilder.control(
        '',
        [Validators.required]
      ),
      dateTill: this.formBuilder.control(
        '',
        [Validators.required]
      ),
    });
  }
}
