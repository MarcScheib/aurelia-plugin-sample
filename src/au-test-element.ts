import { customElement, inlineView } from 'aurelia-templating';

@customElement('au-test-element')
@inlineView(`
  <template>
    <h1>Headline</h1>
    <slot></slot>
  </template>
`)
export class AuTestElement {

}
