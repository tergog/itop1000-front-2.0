import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public footerObjectParameters = {
    logo: {
      view: 'small'
    },
    socialList: [
      { view: 'facebook', href: '' },
      { view: 'linkedin', href: '' },
      { view: 'instagram', href: '' },
      { view: 'tiktok', href: '' }
    ],
    navigationList: [
      { text: 'Client', href: 'client' },
      { text: 'Freelancer', href: 'freelance' },
    ]
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
