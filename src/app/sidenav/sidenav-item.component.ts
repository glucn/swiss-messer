import { Component, OnInit, Input } from '@angular/core';

export interface NavItem {
  matIcon?: string;
  label: string;
  url: string;
  children?: NavItem[];
  selected?: boolean;
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
