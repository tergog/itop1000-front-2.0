import { Component } from '@angular/core';

import { CWorksConfigList } from '../../works.config';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-works-comment',
  templateUrl: './works-comment.component.html',
  styleUrls: ['./works-comment.component.scss']
})
export class WorksCommentComponent {
  public worksConfig = CWorksConfigList;
  public panelOpenState = false;
  public commentFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.commentFormGroup = this.formBuilder.group({
      comment: this.formBuilder.control('',
        [Validators.required,
          Validators.minLength(5),
          Validators.maxLength(200)
        ]
      )
    });
  }
}
