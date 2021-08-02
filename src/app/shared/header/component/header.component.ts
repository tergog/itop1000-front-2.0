import { Component } from '@angular/core';
import { CHeaderConfigList } from '../header.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public headerConfig = CHeaderConfigList;
}
