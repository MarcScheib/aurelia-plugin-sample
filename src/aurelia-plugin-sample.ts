import {FrameworkConfiguration} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';

export function configure(frameworkConfig: FrameworkConfiguration, callback?: () => void): void {
  frameworkConfig.globalResources(PLATFORM.moduleName('./au-test-element'));
}

export * from './au-test-element';
