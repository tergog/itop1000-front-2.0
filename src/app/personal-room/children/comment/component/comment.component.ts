import { Component  } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {

  // Input id project

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
