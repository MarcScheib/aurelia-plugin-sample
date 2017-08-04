import {Aurelia} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';

export async function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  aurelia.use.plugin(PLATFORM.moduleName('aurelia-plugin-sample'));

  await aurelia.start();
  await aurelia.setRoot(PLATFORM.moduleName('app'));
}
