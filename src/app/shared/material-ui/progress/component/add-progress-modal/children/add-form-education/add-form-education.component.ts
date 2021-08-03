import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CAddProgressModalConfigList } from '../../add-progress-modal.config';

@Component({
  selector: 'app-add-form-education',
  templateUrl: './add-form-education.component.html',
  styleUrls: ['./add-form-education.component.scss']
})
export class AddFormEducationComponent {
  public addModalFormGroup: FormGroup;
  public addProgressModalConfig = CAddProgressModalConfigList;

  constructor(private formBuilder: FormBuilder) {
    this.addModalFormGroup = this.formBuilder.group({
      educationName: this.formBuilder.control({ value: 'Education Name', disabled: false }, [Validators.required]),
      specialty: this.formBuilder.control({ value: 'Specialty', disabled: false }, [Validators.required]),
      educationDescription: this.formBuilder.control({
        value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
        disabled: false
      }, [Validators.required]),
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
