import { Component, OnInit } from '@angular/core';

import { ELogoView } from '../../custom-ui/logo/logo.enums';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  public loader = {
    view: ELogoView.Loader
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
