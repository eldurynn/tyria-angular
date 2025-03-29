import { Component } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';

import { HeaderComponent } from '../header/header.component';
import { NavigationListComponent } from '../navigation-list/navigation-list.component';

@Component({
  selector: 'app-navigation',
  imports: [MatSidenavModule, HeaderComponent, NavigationListComponent],
  templateUrl: './navigation.component.html',
})
export class NavigationComponent {
  public isOpen = false;
}
