import { Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { setCssVariable } from 'src/app/core/utility';

@Component({
  selector: 'el-reel',
  template: '<ng-content></ng-content>',
  styles: [
    `
      el-reel {
        --reel-height: auto;
        --reel-margin: var(--s0);
        --reel-flex-basis: auto;
        display: flex;
        overflow-x: auto;
        overflow-y: hidden;
        height: var(--reel-height);
      }
    `,
    `
      el-reel > * {
        flex-basis: var(--reel-flex-basis);
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

  @Input()
  public set felxBasis(value: string) {
    setCssVariable(this.element, '--reel-flex-basis', value);
  }
}
