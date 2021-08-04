import { Component } from '@angular/core';

import { CProjectsConfigList } from '../projects.config';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  public projectsConfig = CProjectsConfigList;
  public panelOpenState = false;

  projectsList = [
    {
      title: 'Script development',
      rate: 1000,
      companyName: 'Company Name',
      description: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame',
      skills: ['JavaScript', 'CSS3', 'HTML5', 'Angular'],
      location: 'Kharkov, Ukraine',
      date: 1627896098000,
      status: 'free'
    },
    {
      title: 'Script development',
      rate: 1000,
      companyName: 'Company Name',
      description: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame',
      skills: ['JavaScript', 'CSS3', 'HTML5', 'Angular'],
      location: 'Kharkov, Ukraine',
      date: 1627896098000,
      status: 'free'
    }
  ];
}
