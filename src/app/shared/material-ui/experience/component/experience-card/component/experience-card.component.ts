import { Component, EventEmitter, Input, Output } from '@angular/core';

import { EExperienceCardView } from '../experience-card.enums';
import { CExperienceCardConfigList } from '../experience-card.config';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent {
  public EExperienceCardView = EExperienceCardView;
  public experienceCardConfig = CExperienceCardConfigList;
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

  openEditExperienceModal(): void{
    this.editExperienceModal.emit(this.id);
  }

  openRemoveExperienceModal(): void{
    this.removeExperienceModal.emit(this.id);
  }

}
