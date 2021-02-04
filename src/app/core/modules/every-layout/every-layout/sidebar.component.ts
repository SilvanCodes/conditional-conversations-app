import { Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { setCssVariable } from 'src/app/core/utility';

@Component({
  selector: 'el-sidebar',
  template: '<ng-content></ng-content>',
  styles: [
    `
      el-sidebar {
        --sidebar-flex-basis: initial;
        --sidebar-min-width: 50%;
        display: flex;
        flex-wrap: wrap;
      }
    `,
    `
      el-sidebar > :first-child {
        flex-basis: var(--sidebar-flex-basis);
        flex-grow: 1;
      }
    `,
    `
      el-sidebar > :last-child {
        flex-basis: 0;
        flex-grow: 999;
        min-width: var(--sidebar-min-width);
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent {
  constructor(private element: ElementRef) {}

  @Input()
  public set flexBasis(value: string) {
    setCssVariable(this.element, '--sidebar-flex-basis', value);
  }

  @Input()
  public set minWidth(value: string) {
    setCssVariable(this.element, '--sidebar-min-width', value);
  }
}
