import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() navMenuOpened!: boolean;

  @Output() toggleNavigationMenu = new EventEmitter<boolean>();

  public handleMenuBtnClick(): void {
    this.navMenuOpened = !this.navMenuOpened;
    this.toggleNavigationMenu.emit(this.navMenuOpened);
  }
  
}
