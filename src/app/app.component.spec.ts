import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";

import { AppComponent } from "./app.component";

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;

  const createComponent = createComponentFactory(AppComponent);

  beforeEach(() => spectator = createComponent());

  test('should create component', () => {
    expect(spectator.component).toBeTruthy();
  });
});
