import { Component } from '@angular/core';
import { CWalletConfigList } from '../wallet.config';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent {
  public walletConfig = CWalletConfigList;

  historyList = [
    { companyName: 'Company', date: 1628064901000, total: 40 },
    { companyName: 'Company', date: 1628064901000, total: 50 },
    { companyName: 'Company', date: 1628064901000, total: 320 }
  ];
}
