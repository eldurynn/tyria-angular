import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let spectator: Spectator<HeaderComponent>;
  
  const createComponent = createComponentFactory(HeaderComponent);

  beforeEach(() => {
    spectator = createComponent({
      props: {
        navMenuOpened: false,
      }
    });
  });

  it('should trigger an event that contains information about the opened state of navigation drawer', () => {
    const emitToggleNavigationMenuSpy = jest.spyOn(spectator.component.toggleNavigationMenu, 'emit');

    spectator.component.handleMenuBtnClick();

    expect(spectator.component.navMenuOpened).toBeTruthy();
    expect(emitToggleNavigationMenuSpy).toHaveBeenCalledWith(true);
  });
});
