import { Component} from '@angular/core';

import { CModalSelectRoleConfigList } from '../modal-select-role.config';

@Component({
  selector: 'app-modal-select-role',
  templateUrl: './modal-select-role.component.html',
  styleUrls: ['./modal-select-role.component.scss']
})
export class ModalSelectRoleComponent{

  public modalSelectRoleConfig = CModalSelectRoleConfigList;
}
