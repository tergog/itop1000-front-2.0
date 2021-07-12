import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ITOP1000-FRONT2';

  buttonParameters = {
    text: 'Discover Projects',
    type: '',
    view: 'big',
    disabled: false
  }
}
