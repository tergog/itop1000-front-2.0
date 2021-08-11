import { Component, Input } from '@angular/core';

import { IIconParameters } from '../social-list.interfaces';
import { EIconView } from '../social-list.enums';

@Component({
  selector: 'app-social-list',
  templateUrl: './social-list.component.html',
  styleUrls: ['./social-list.component.scss']
})
export class SocialListComponent {
  public EIconView = EIconView;
  public componentParameters: IIconParameters[];
  @Input() set iconParameters(value: IIconParameters[]) {
    this.componentParameters = value;
  }

  get iconParameters(): IIconParameters[] {
    return this.componentParameters;
  }
}
