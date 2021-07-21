import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent implements OnInit {
  public _experienceCardData: any;
  @Input() set experienceCardData(value: any) {
    this._experienceCardData = value;
  }

  get experienceCardData(): any {
    return this._experienceCardData;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
