import { Component } from '@angular/core';

import { CWorksConfigList } from '../../works.config';

@Component({
  selector: 'app-works-comment',
  templateUrl: './works-comment.component.html',
  styleUrls: ['./works-comment.component.scss']
})
export class WorksCommentComponent {

  public worksConfig = CWorksConfigList;

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
}
