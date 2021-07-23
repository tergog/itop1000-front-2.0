import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-select-role',
  templateUrl: './modal-select-role.component.html',
  styleUrls: ['./modal-select-role.component.scss']
})
export class ModalSelectRoleComponent implements OnInit {

  public modalParameters = {
    button: {
      text: 'Next',
      type: '',
      view: 'medium',
      disabled: false
    }
  };

  constructor() {
  }

  ngOnInit(): void {
  }
}
