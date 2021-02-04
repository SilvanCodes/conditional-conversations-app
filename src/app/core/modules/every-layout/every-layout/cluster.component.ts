import { Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { setCssVariable } from 'src/app/core/utility';

@Component({
  selector: 'el-cluster',
  template: '<div><ng-content></ng-content></div>',
  styles: [
    `
      el-cluster {
        --cluster-margin: var(--s0);
        --cluster-justify-content: flex-start;
        overflow: hidden;
      }
    `,
    `
      el-cluster > * {
        display: flex;
        flex-wrap: wrap;
        margin: calc(var(--cluster-margin) / 2 * -1);
        justify-content: var(--cluster-justify-content);
        align-items: center;
      }
    `,
    `
      el-cluster > * > * {
        margin: calc(var(--cluster-margin) / 2);
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ClusterComponent {
  constructor(private element: ElementRef) {}

  @Input()
  public set margin(value: string) {
    setCssVariable(this.element, '--cluster-margin', value);
  }
  @Input()
  public set justifyContent(value: string) {
    setCssVariable(this.element, '--cluster-justify-content', value);
  }
}
