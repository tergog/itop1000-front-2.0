import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ITOP1000-FRONT2';
  public svgList = ['wallet', 'projects', 'documents', 'support', 'tracker', 'personal', 'chat'];

  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
    this.svgList.forEach((item: string) => {
      this.matIconRegistry.addSvgIcon(
        item,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`/assets/img/icons/${item}.svg`)
      );
    });
  }

}
