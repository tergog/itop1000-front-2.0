import { Component, Input } from '@angular/core';

import { IHistoryParameters } from '../history.interfaces';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  public componentParameters: IHistoryParameters;

  @Input() set historyParameters(value: IHistoryParameters) {
    this.componentParameters = value;
  }

  get historyParameters(): IHistoryParameters {
    return this.componentParameters;
  }
}
