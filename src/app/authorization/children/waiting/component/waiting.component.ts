import { Component } from '@angular/core';
import { CWaitingConfigList } from '../waiting.config';

@Component({
  selector: 'app-waiting',
  templateUrl: './waiting.component.html',
  styleUrls: ['./waiting.component.scss']
})
export class WaitingComponent {
  public waitingConfig = CWaitingConfigList;
}
