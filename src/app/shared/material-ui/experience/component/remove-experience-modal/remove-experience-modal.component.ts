import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-remove-experience-modal',
  templateUrl: './remove-experience-modal.component.html',
  styleUrls: ['./remove-experience-modal.component.scss']
})
export class RemoveExperienceModalComponent implements OnInit {

  public modalData = {
    buttons: {
      accept: {
        text: 'Yes',
        type: '',
        view: 'medium',
        disabled: false
      },
      decline: {
        text: 'No',
        type: '',
        view: 'small-empty',
        disabled: false
      },
      close: {
        text: '',
        type: '',
        view: 'close',
        disabled: false
      }
    }
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
  }

}
