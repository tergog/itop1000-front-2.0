import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  public breadcrumbsRoutes: string[];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.getBreadcrumbsRoute();
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe(event => {
        this.getBreadcrumbsRoute();
    });
  }

  getBreadcrumbsRoute(): void {
    this.breadcrumbsRoutes = this.router.url.split('/').slice(2);
  }

}
