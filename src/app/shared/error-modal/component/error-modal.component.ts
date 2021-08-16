import { Component, OnInit } from '@angular/core';

import { CErrorModalConfigList } from '../error-modal.config';
import { ErrorModalService } from '../../../services/error-modal/error-modal.service';
import { EErrorModalContent, EErrorModalView } from '../../../services/error-modal/error-modal.enums';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.scss']
})
export class ErrorModalComponent implements OnInit {
  public errorModalConfig = CErrorModalConfigList;
  public EErrorModalView = EErrorModalView;
  public EErrorModalContent = EErrorModalContent;
  public errorModalContent$: BehaviorSubject<string>;
  public errorModalView$: BehaviorSubject<string>;
  public errorModalState$: BehaviorSubject<boolean>;

  constructor(private errorModalService: ErrorModalService) { }

  ngOnInit(): void {
    this.errorModalContent$ = this.errorModalService.errorModalContent$;
    this.errorModalView$ = this.errorModalService.errorModalView$;
    this.errorModalState$ = this.errorModalService.errorModalState$;
  }

}
