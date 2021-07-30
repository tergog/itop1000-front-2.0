import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EExperienceCardView } from './experience-card.enums';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent implements OnInit {
  public EExperienceCardView = EExperienceCardView;
  public experienceCardConfig = {
    buttons: {
      delete: {
        text: '',
        type: '',
        view: 'delete-empty',
        disabled: false
      },
      edit: {
        text: '',
        type: '',
        view: 'edit-empty',
        disabled: false
      }
    }
  }
  public _experienceCardData: any;
  @Input() id?: number;
  @Input() view: string;
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

  openEditExperienceModal(): void{
    this.editExperienceModal.emit(this.id);
  }

  openRemoveExperienceModal(): void{
    this.removeExperienceModal.emit(this.id);
  }

}
