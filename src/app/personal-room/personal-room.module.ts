import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoomComponent } from './component/personal-room.component';
import { PersonalRoomRoutingModule } from './personal-room-routing.module';
import { CustomUiModule } from '../shared/custom-ui/custom-ui.module';
import { NavigationModule } from '../shared/navigation/navigation.module';
import { HeaderModule } from '../shared/header/header.module';
import { FooterModule } from '../shared/footer/footer.module';
import { WalletComponent } from './children/wallet/component/wallet.component';
import { ProjectsComponent } from './children/projects/component/projects.component';
import { WorksComponent } from './children/works/component/works.component';
import { TrackerComponent } from './children/tracker/component/tracker.component';
import { ChatComponent } from './children/chat/component/chat.component';
import { SecurityComponent } from './children/security/component/security.component';

@NgModule({
  declarations: [
    PersonalRoomComponent,
    WalletComponent,
    ProjectsComponent,
    WorksComponent,
    TrackerComponent,
    ChatComponent,
    SecurityComponent
  ],
  imports: [
    CommonModule,
    PersonalRoomRoutingModule,
    CustomUiModule,
    NavigationModule,
    HeaderModule,
    FooterModule
  ],
  exports: [
    PersonalRoomComponent
  ]
})
export class PersonalRoomModule { }
