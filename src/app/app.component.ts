import { Component } from '@angular/core';
import { SideNavService } from './core/services/sidenav.service';
import { NavItem } from './sidenav/sidenav-item.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = 'Swiss-Messer';
  navItems$: Observable<NavItem[]>;

  constructor(private sideNavService: SideNavService) {
    this.navItems$ = this.sideNavService.navItems$;
  }
}
