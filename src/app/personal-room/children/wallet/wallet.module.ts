import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletComponent } from './component/wallet.component';
import { WalletRoutingModule } from './wallet-routing.module';
import { CustomUiModule } from '../../../shared/custom-ui/custom-ui.module';

@NgModule({
  declarations: [
    WalletComponent
  ],
  imports: [
    CommonModule,
    WalletRoutingModule,
    CustomUiModule
  ],
  exports: [
    WalletComponent
  ]
})
export class WalletModule { }
