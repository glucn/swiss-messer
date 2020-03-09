import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from './sidenav-item.component';


@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
  })
  export class SideNavComponent implements OnInit {
    @Input() navItems: NavItem[] = [{iconUrl: "https://google.com", label:"test nav bar"}];

    ngOnInit(): void {
    }
  }
