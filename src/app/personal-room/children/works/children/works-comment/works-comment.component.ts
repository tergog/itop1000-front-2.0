import { Component } from '@angular/core';

import { CWorksConfigList } from '../../works.config';
import { CProjectsConfigList } from '../../../projects/projects.config';
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

  commentList = [
    {
      name: 'Name',
      lastName: 'Surname',
      photo: '/assets/img/user-comment.png',
      date: 1628161353000,
      comment: 'Ous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.'
    },
    {
      name: 'Name',
      lastName: 'Surname',
      photo: '/assets/img/user-comment.png',
      date: 1628161353000,
      comment: 'Ous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.'
    },
    {
      name: 'Name',
      lastName: 'Surname',
      photo: '/assets/img/user-comment.png',
      date: 1628161353000,
      comment: 'Ous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.'
    }
  ];

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
