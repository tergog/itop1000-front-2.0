import { Component, OnInit } from '@angular/core';
import { CLandingData } from '../../constantes/constantes';
import { ILandingData } from '../landing.interfaces';
import { ELandingRole } from '../landing.enums';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  // public landingData: ILandingData = CLandingData.freelancer;
  public landingData: ILandingData = CLandingData.productOwner;
  public ELandingRole = ELandingRole;

  constructor() {
  }

  ngOnInit(): void {
  }

}
