import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from './sidenav-item.component';


@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
  })
  export class SideNavComponent implements OnInit {
    @Input() logoUrl: String = '';
    @Input() appName: String = '';
    @Input() navItems: NavItem[] = [{url: 'https://google.com', label: 'test nav bar'}];

    ngOnInit(): void {
    }
  }
