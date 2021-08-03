import { Component, EventEmitter, Input, Output } from '@angular/core';

import { EProgressCardView } from '../progress-card.enums';
import { CProgressCardConfigList } from '../progress-card.config';
import { EProgressType } from '../../../progress.enums';
import { IProgressCardParameters } from '../progress-card.interfaces';

@Component({
  selector: 'app-progress-card',
  templateUrl: './progress-card.component.html',
  styleUrls: ['./progress-card.component.scss']
})
export class ProgressCardComponent {
  public EProgressCardView = EProgressCardView;
  public EProgressType = EProgressType;
  public progressCardConfig = CProgressCardConfigList;
  public componentData: IProgressCardParameters;
  @Input() id?: number;
  @Input() view: string;
  @Input() type: string;
  @Input() set progressCardData(value: IProgressCardParameters) {
    this.componentData = value;
  }

  get progressCardData(): IProgressCardParameters {
    return this.componentData;
  }

  @Output() editProgressModal = new EventEmitter<number>();
  @Output() removeProgressModal = new EventEmitter<number>();

  openEditProgressModal(): void{
    this.editProgressModal.emit(this.id);
  }

  openRemoveProgressModal(): void{
    this.removeProgressModal.emit(this.id);
  }

}
