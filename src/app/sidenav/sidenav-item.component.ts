import { Component, OnInit, Input } from '@angular/core';

export interface NavItem {
  iconUrl: string;
  label: string;
}

@Component({
  selector: 'app-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss']
})
export class SideNavItemComponent implements OnInit {
  @Input() item: NavItem;

  ngOnInit(): void {

  }
}
