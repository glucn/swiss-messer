import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideNavComponent } from './sidenav.component';
import { SideNavItemComponent } from './sidenav-item.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
      SideNavComponent,
      SideNavItemComponent,
    ],
    imports: [
      BrowserModule,
      MatIconModule,
      MatSidenavModule,
      RouterModule,
    ],
    exports: [
      SideNavComponent,
      SideNavItemComponent,
    ],
  })
export class SideNavModule {}
