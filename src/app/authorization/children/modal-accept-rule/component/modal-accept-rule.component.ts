import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { EModalAcceptRuleView } from '../modal-accept-rule.enums';
import { IModalAcceptRuleData } from '../modal-accept-rule.interfaces';
import { CModalAcceptRuleConfigList } from '../modal-accept-rule.config';

@Component({
  selector: 'app-modal-accept-rule',
  templateUrl: './modal-accept-rule.component.html',
  styleUrls: ['./modal-accept-rule.component.scss']
})
export class ModalAcceptRuleComponent implements OnInit {
  public EModalAcceptRuleView = EModalAcceptRuleView;
  public modalAcceptRuleData: IModalAcceptRuleData;
  public modalAcceptRuleConfig: {[key: string]: IModalAcceptRuleData } = CModalAcceptRuleConfigList;

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {
  }

  ngOnInit(): void {
    this.modalAcceptRuleData = this.modalAcceptRuleConfig[this.data];
  }
}
