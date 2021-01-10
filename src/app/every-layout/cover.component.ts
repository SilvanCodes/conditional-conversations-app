import { Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { setCssVariable } from '../utility';

@Component({
  selector: 'el-cover',
  template: '<ng-content></ng-content>',
  styles: [
    `
      el-cover {
        --cover-padding: var(--s0);
        --cover-margin: var(--s0);
        --cover-min-height: 100%;
        display: flex;
        flex-direction: column;
        min-height: var(--cover-min-height);
        padding: var(--cover-padding);
      }
    `,
    `
      el-cover > * {
        margin-top: var(--cover-margin);
        margin-bottom: var(--cover-margin);
      }
    `,
    /* if just on child, it is main */
    `
      el-cover > :only-child {
        margin-top: auto;
        margin-bottom: auto;
      }
    `,
    /* if two childs, heading and main */
    `
      el-cover > :last-child:nth-child(2) {
        margin-top: auto;
        margin-bottom: auto;
      }
    `,
    `
      el-cover > :first-child:nth-last-child(2) {
        margin-top: 0;
      }
    `,
    /* if three childs, heading, main, footer */
    `
      el-cover > :nth-child(2):nth-last-child(2) {
        margin-top: auto;
        margin-bottom: auto;
      }
    `,
    `
      el-cover > :first-child:nth-last-child(3) {
        margin-top: 0;
      }
    `,
    `
      el-cover > :last-child::nth-child(3) {
        margin-bottom: 0;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class CoverComponent {
  constructor(private element: ElementRef) {}

  @Input()
  public set margin(value: string) {
    setCssVariable(this.element, '--cover-margin', value);
  }
  @Input()
  public set padding(value: string) {
    setCssVariable(this.element, '--cover-padding', value);
  }
  @Input()
  public set minHeight(value: string) {
    setCssVariable(this.element, '--cover-min-height', value);
  }
}
