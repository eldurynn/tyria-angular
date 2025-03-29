import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  let spectator: Spectator<NavigationComponent>;

  const createComponent = createComponentFactory(NavigationComponent);

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
