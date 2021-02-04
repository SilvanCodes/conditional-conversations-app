import { Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { setCssVariable } from 'src/app/core/utility';

@Component({
  selector: 'el-grid',
  template: '<ng-content></ng-content>',
  styles: [
    `
      el-grid {
        --grid-grid-gap: var(--s0);
        --grid-column-min-width: var(--s5);
        display: grid;
        grid-gap: var(--grid-grid-gap);
      }
    `,
    `
      el-grid {
        grid-template-columns: repeat(
          auto-fit,
          minmax(min(var(--grid-column-min-width), 100%), 1fr)
        );
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class GridComponent {
  constructor(private element: ElementRef) {}

  @Input()
  public set columnMinWidth(value: string) {
    setCssVariable(this.element, '--grid-column-min-width', value);
  }

  @Input()
  public set gridGap(value: string) {
    setCssVariable(this.element, '--grid-grid-gap', value);
  }
}
