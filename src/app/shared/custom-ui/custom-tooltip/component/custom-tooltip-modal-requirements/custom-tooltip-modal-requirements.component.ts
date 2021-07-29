import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-tooltip-modal-requirements',
  templateUrl: './custom-tooltip-modal-requirements.component.html',
  styleUrls: ['./custom-tooltip-modal-requirements.component.scss']
})
export class CustomTooltipModalRequirementsComponent implements OnInit {

  public modalRequitementsData = {
    buttons: {
      accept: {
        text: 'OK',
        type: '',
        view: 'medium',
        disabled: false}
    }
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
