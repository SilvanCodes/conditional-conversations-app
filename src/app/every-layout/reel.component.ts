import { Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { setCssVariable } from '../utility';

@Component({
  selector: 'el-reel',
  template: '<ng-content></ng-content>',
  styles: [
    `
      el-reel {
        --reel-height: auto;
        --reel-margin: var(--s0);
        /* --border: var(--s-5); */
        /* --padding: var(--s0); */
        display: flex;
        overflow-x: auto;
        overflow-y: hidden;
        height: var(--reel-height);
        /* max-width: 100%; */
        /* padding: var(--padding); */
        /* border: var(--border) solid; */
      }
    `,
    `
      el-reel > * {
        flex: 0 0 auto;
      }
    `,
    `
      el-reel > * + * {
        margin-left: var(--reel-margin);
      }
    `,
    `
      el-reel > img {
        height: 100%;
        flex-basis: auto;
        width: auto;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ReelComponent {
  constructor(private element: ElementRef) {}

  @Input()
  public set height(value: string) {
    setCssVariable(this.element, '--reel-height', value);
  }
  @Input()
  public set margin(value: string) {
    setCssVariable(this.element, '--reel-margin', value);
  }
}
