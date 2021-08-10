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
      name: this.formBuilder.control({ value: '', disabled: false }, [Validators.required]),
      specialty: this.formBuilder.control({ value: '', disabled: false }, [Validators.required]),
      description: this.formBuilder.control({
        value: '',
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
