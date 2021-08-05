import { Component } from '@angular/core';

@Component({
  selector: 'app-works-list',
  templateUrl: './works-list.component.html',
  styleUrls: ['./works-list.component.scss']
})
export class WorksListComponent {
  worksList = [
    {
      title: 'Script development',
      rate: 1000,
      companyName: 'Company Name',
      description: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame',
      skills: ['JavaScript', 'CSS3', 'HTML5', 'Angular'],
      location: 'Kharkov, Ukraine',
      date: 1627896098000,
      status: 'development'
    },
    {
      title: 'Script development',
      rate: 1000,
      companyName: 'Company Name',
      description: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame',
      skills: ['JavaScript', 'CSS3', 'HTML5', 'Angular'],
      location: 'Kharkov, Ukraine',
      date: 1627896098000,
      status: 'completed'
    }
  ];
}
