import { Component, OnInit } from '@angular/core';

import { ItopDataService } from './services/itop-data/itop-data.service';
import { SvgServiceService } from './services/svg-service/svg-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'ITOP1000-FRONT2';

  constructor(
    private staticData: ItopDataService,
    private svgService: SvgServiceService
  ) {
  }

  ngOnInit(): void {
    this.staticData.getStaticData();
    this.svgService.init();
  }
}
