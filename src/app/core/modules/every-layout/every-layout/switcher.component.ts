import { Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { setCssVariable } from 'src/app/core/utility';

@Component({
  selector: 'el-switcher',
  template: '<div><ng-content></ng-content></div>',
  styles: [
    `
      el-switcher {
        --switcher-margin: var(--s0);
        --switcher-min-width: var(--measure);
      }
    `,
    `
      el-switcher > * {
        display: flex;
        flex-wrap: wrap;
        margin: calc(var(--switcher-margin) / 2 * -1);
      }
    `,
    `
      el-switcher > * > * {
        flex-grow: 1;
        flex-basis: calc(
          (var(--switcher-min-width) - (100% - var(--switcher-margin))) * 999
        );
        margin: calc(var(--switcher-margin) / 2);
      }
    `,
    `
      el-switcher > * > :nth-child(2):nth-last-child(2) {
        flex-grow: 2;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class SwitcherComponent {
  constructor(private element: ElementRef) {}

  @Input()
  public set margin(value: string) {
    setCssVariable(this.element, '--switcher-margin', value);
  }
  @Input()
  public set minWidth(value: string) {
    setCssVariable(this.element, '--switcher-min-width', value);
  }
}
