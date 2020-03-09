import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideNavComponent } from './sidenav.component';
import { SideNavItemComponent } from './sidenav-item.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
      SideNavComponent,
      SideNavItemComponent,
    ],
    imports: [
      BrowserModule,
      MatSidenavModule,
    ],
    exports: [
      SideNavComponent,
      SideNavItemComponent,
    ],
  })
export class SideNavModule {}
