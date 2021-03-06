import { Component, Input, OnInit } from '@angular/core';
import { INavigationParameters } from '../navigation.interfaces';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public _navigationParameters: INavigationParameters[];
  @Input() set navigationParameters(value: INavigationParameters[]) {
    this._navigationParameters = value;
  }

  get navigationParameters(): INavigationParameters[] {
    return this._navigationParameters;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
