import { App.RouteModule } from './app.route.module';

describe('App.RouteModule', () => {
  let appRouteModule: App.RouteModule;

  beforeEach(() => {
    appRouteModule = new App.RouteModule();
  });

  it('should create an instance', () => {
    expect(appRouteModule).toBeTruthy();
  });
});
