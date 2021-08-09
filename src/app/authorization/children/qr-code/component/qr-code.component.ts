import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CQRCodeConfigList } from '../qr-code.config';
import { getSignInData, IState } from '../../../../reducers';
import { ISignInState } from '../../../../reducers/sign-in/sign-in.interfaces';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss']
})
export class QrCodeComponent {
  public qrCodeConfig = CQRCodeConfigList;
  public signInData: Observable<ISignInState>;
  public token =  localStorage.getItem('token');

  constructor(private store: Store<IState>) {
    this.signInData = this.store.select(getSignInData);
  }
}
