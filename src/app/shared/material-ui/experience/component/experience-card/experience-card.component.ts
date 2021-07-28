import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent implements OnInit {
  public _experienceCardData: any;
  @Input() id: number;
  @Input() set experienceCardData(value: any) {
    this._experienceCardData = value;
  }

  get experienceCardData(): any {
    return this._experienceCardData;
  }

  @Output() editExperienceModal = new EventEmitter<number>();
  @Output() removeExperienceModal = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  openEditExperienceModal(id: number): void{
    this.editExperienceModal.emit(id);
  }

  openRemoveExperienceModal(id: number): void{
    this.removeExperienceModal.emit(id);
  }

}
