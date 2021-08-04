import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CProjectsConfigList } from '../projects.config';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  public projectsConfig = CProjectsConfigList;
  public panelOpenState = false;
  public projectFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.projectFormGroup  = this.formBuilder.group({
      type: this.formBuilder.control(this.projectsConfig.filtration.type),
      skills: this.formBuilder.control(this.projectsConfig.filtration.skills),
      languages: this.formBuilder.control(this.projectsConfig.filtration.languages)
    });
  }

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
