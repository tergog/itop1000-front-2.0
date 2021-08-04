import { Component, OnInit } from '@angular/core';
import { CWalletConfigList } from '../wallet.config';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  public walletConfig = CWalletConfigList;

  constructor() { }

  ngOnInit(): void {
  }

}
