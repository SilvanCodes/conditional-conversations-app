import { Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { setCssVariable } from 'src/app/core/utility';

@Component({
  selector: 'el-box',
  template: '<ng-content></ng-content>',
  styles: [
    `
      el-box {
        --box-padding: var(--s0);
        --box-border: var(--s-5);
        padding: var(--box-padding);
        border: var(--box-border) solid;
        /* required because default for custom elements is inline */
        display: block;
      }
    `,
    `
      el-box * {
        color: inherit;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class BoxComponent {
  constructor(private element: ElementRef) {}

  @Input()
  public set padding(value: string) {
    setCssVariable(this.element, '--box-padding', value);
  }

  @Input()
  public set border(value: string) {
    setCssVariable(this.element, '--box-border', value);
  }
}
