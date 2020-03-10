import { Observable, of } from 'rxjs';
import { NavItem } from '../../sidenav/sidenav-item.component';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class SideNavService {
  public navItems$: Observable<NavItem[]>;

  constructor() {
    this.navItems$ = of(
      [
        {
          label: 'URL Pretty Print',
          url: '/url-prettier',
        },
        {
          label: 'Json Pretty Print',
          url: '/json-prettier',
        },
      ]
    );
  }
}
