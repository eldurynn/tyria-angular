import { Component } from '@angular/core';

import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-navigation-list',
  imports: [MatListModule, MatToolbarModule],
  templateUrl: './navigation-list.component.html',
})
export class NavigationListComponent {

}
