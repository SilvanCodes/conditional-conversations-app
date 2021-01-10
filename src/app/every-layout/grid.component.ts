import { Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { setCssVariable } from '../utility';

@Component({
  selector: 'el-grid',
  template: '<ng-content></ng-content>',
  styles: [
    `
      el-grid {
        --grid-margin: var(--s0);
        --grid-min-width: 10rem;
        display: grid;
        grid-gap: 1rem;
      }
    `,
    `
      el-grid {
        grid-template-columns: repeat(
          auto-fit,
          minmax(min(var(--grid-min-width), 100%), 1fr)
        );
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class GridComponent {
  constructor(private element: ElementRef) {}

  @Input()
  public set minWidth(value: string) {
    setCssVariable(this.element, '--grid-min-width', value);
  }
}
