import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CAddLanguageModalConfigList, CLanguageList, CProficiencyList } from '../add-language-modal.config';

@Component({
  selector: 'app-add-language-modal',
  templateUrl: './add-language-modal.component.html',
  styleUrls: ['./add-language-modal.component.scss']
})
export class AddLanguageModalComponent {
  public addModalFormGroup: FormGroup;
  public addLanguageModalConfig = CAddLanguageModalConfigList;

  constructor(private formBuilder: FormBuilder) {
    this.addModalFormGroup = this.formBuilder.group({
      language: this.formBuilder.control({ value: CLanguageList, disabled: false }, [Validators.required]),
      proficiency: this.formBuilder.control({ value: CProficiencyList, disabled: false }, [Validators.required])
    });
  }
}
