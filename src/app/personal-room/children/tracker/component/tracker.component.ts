import { Component } from '@angular/core';
import { CTrackerConfigList } from '../tracker.config';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent {
  public trackerConfig = CTrackerConfigList;

}
