import { Component, Input, OnInit } from '@angular/core';

import { IIconParameters } from './social-list.interfaces';
import { EIconView } from './social-list.enums';

@Component({
  selector: 'app-social-list',
  templateUrl: './social-list.component.html',
  styleUrls: ['./social-list.component.scss']
})
export class SocialListComponent implements OnInit {
  public EIconView = EIconView;
  public _iconParameters: IIconParameters[];
  @Input() set iconParameters(value: IIconParameters[]) {
    this._iconParameters = value;
  }

  get iconParameters(): IIconParameters[] {
    return this._iconParameters;
  }

  constructor() {

  }

  ngOnInit(): void {
  }

}
