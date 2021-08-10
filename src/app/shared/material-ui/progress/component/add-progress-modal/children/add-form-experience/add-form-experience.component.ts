import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CAddProgressModalConfigList } from '../../add-progress-modal.config';

@Component({
  selector: 'app-add-form-experience',
  templateUrl: './add-form-experience.component.html',
  styleUrls: ['./add-form-experience.component.scss']
})
export class AddFormExperienceComponent {
  public addModalFormGroup: FormGroup;
  public addProgressModalConfig = CAddProgressModalConfigList;

  constructor(private formBuilder: FormBuilder) {
    this.addModalFormGroup = this.formBuilder.group({
      name: this.formBuilder.control({ value: '', disabled: false }, [Validators.required]),
      jobTitle: this.formBuilder.control({ value: '', disabled: false }, [Validators.required]),
      positionTitle: this.formBuilder.control({ value: '', disabled: false }, [Validators.required]),
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
