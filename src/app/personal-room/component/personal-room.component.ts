import { Component, OnInit } from '@angular/core';
import { CPersonalRoomConfig } from '../personal-room.config';

@Component({
  selector: 'app-personal-room',
  templateUrl: './personal-room.component.html',
  styleUrls: ['./personal-room.component.scss']
})
export class PersonalRoomComponent implements OnInit {
  public personalRoomConfig = CPersonalRoomConfig;

  constructor() {
  }

  ngOnInit(): void {
  }

}
