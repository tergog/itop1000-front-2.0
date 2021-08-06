import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ItopDataService } from './services/itop-data/itop-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public title = 'ITOP1000-FRONT2';
  public svgList = [
    'wallet',
    'projects',
    'documents',
    'support',
    'tracker',
    'personal',
    'chat',
    'completed',
    'work',
    'free',
    'location',
    'profile',
    'search',
    'developers'
  ];

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private staticData: ItopDataService
  ) {
    this.svgList.forEach((item: string) => {
      this.matIconRegistry.addSvgIcon(
        item,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`/assets/img/icons/${item}.svg`)
      );
    });
  }

  ngOnInit(): void{
    this.staticData.getStaticData();
  }
}
