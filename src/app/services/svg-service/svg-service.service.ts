import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SvgServiceService {

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
    'developers',
    'apple',
    'facebook',
    'facebook-empty',
    'google',
    'instagram',
    'linkedin',
    'tiktok',
    'dollar',
    'calendar',
    'arrow-down',
    'arrow-down-select'
  ];

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
  }

  init(): void {
    this.svgList.forEach((item: string) => {
      this.matIconRegistry.addSvgIcon(
        item,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`/assets/img/icons/${ item }.svg`)
      );
    });
  }
}
