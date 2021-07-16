import { Component, OnInit } from '@angular/core';
import { ELandingRole } from '../../../landing/landing.enums';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public footerObjectParameters = {
    logo: {
      view: 'medium'
    },
    socialList: [
      { view: 'facebook', href: '' },
      { view: 'linkedin', href: '' },
      { view: 'instagram', href: '' },
      { view: 'tiktok', href: '' }
    ],
    navigationList: {
      view: 'footer',
      links: [
        { text: 'Client', href: 'client', role: ELandingRole.ProductOwner},
        { text: 'Freelancer', href: 'freelance', role: ELandingRole.Freelancer}
      ]
    }
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
