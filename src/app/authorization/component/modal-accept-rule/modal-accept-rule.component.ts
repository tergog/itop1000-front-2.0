import { Component, Inject, OnInit } from '@angular/core';

import { EModalAcceptRuleView } from './modal-accept-rule.enums';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CModalAcceptRuleData } from '../../../constantes/constantes';
import { IModalAcceptRuleData } from './modal-accept-rule.interfaces';

@Component({
  selector: 'app-modal-accept-rule',
  templateUrl: './modal-accept-rule.component.html',
  styleUrls: ['./modal-accept-rule.component.scss']
})
export class ModalAcceptRuleComponent implements OnInit {

  public EModalAcceptRuleView = EModalAcceptRuleView;
  public modalAcceptRuleData: IModalAcceptRuleData;

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.modalAcceptRuleData = CModalAcceptRuleData[this.data];
  }
}
