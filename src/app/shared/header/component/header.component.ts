import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public objLogoParameters = {
    small: {
      view: 'small'
    }
  };

  public objButtonParameters = {
    login: {
      text: 'Login',
      type: '',
      view: 'login',
      disabled: false,
      href: ''
    },
    signUp: {
      text: 'Sign Up',
      type: '',
      view: 'sign-up',
      disabled: false,
      href: ''
    },
  };

  public arrNavigationParameters = [
    { text: 'Projects', href: 'projects' },
    { text: 'Chat', href: 'chat' },
    { text: 'Support / FAQ', href: 'support' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
