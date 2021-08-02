import { Component } from '@angular/core';

import { CLoaderConfigList } from '../loader.config';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  public loaderConfig = CLoaderConfigList;
}
