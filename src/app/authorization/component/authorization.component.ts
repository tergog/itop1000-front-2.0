import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalSelectRoleComponent } from '../children/modal-select-role/component/modal-select-role.component';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  public logo = {
    view: 'big'
  };

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.openDialog();
  }


  openDialog(): void {
    this.dialog.open(ModalSelectRoleComponent);
  }
}
