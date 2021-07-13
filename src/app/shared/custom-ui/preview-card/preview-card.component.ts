import { Component, Input, OnInit } from '@angular/core';

import { EPreviewCardView } from './preview-card.enums';
import { IPreviewCardParameters } from './preview-card.interfaces';

@Component({
  selector: 'app-preview-card',
  templateUrl: './preview-card.component.html',
  styleUrls: ['./preview-card.component.scss']
})
export class PreviewCardComponent implements OnInit {
  public EPreviewCardView = EPreviewCardView;
  public _previewCardParameters: IPreviewCardParameters;
  @Input() set previewCardParameters(value: IPreviewCardParameters) {
    this._previewCardParameters = value;
  }

  get previewCardParameters(): IPreviewCardParameters {
    return this._previewCardParameters;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
