import { Component, Input } from '@angular/core';

import { ICommentCardParameters } from '../comment-card.interfaces';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss']
})
export class CommentCardComponent {
  public componentParameters: ICommentCardParameters;

  @Input() set commentCardParameters(value: ICommentCardParameters) {
    this.componentParameters = value;
  }

  get commentCardParameters(): ICommentCardParameters {
    return this.componentParameters;
  }
}
