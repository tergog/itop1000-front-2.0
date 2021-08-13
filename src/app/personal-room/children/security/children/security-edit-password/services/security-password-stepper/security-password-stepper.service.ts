import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecurityPasswordStepperService {
  public editPasswordSteps$: BehaviorSubject<number> = new BehaviorSubject(0);
}
