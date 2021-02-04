import { Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { setCssVariable } from 'src/app/core/utility';

@Component({
  selector: 'el-imposter',
  template: '<ng-content></ng-content>',
  styles: [
    `
      el-imposter {
        --imposter-position: absolute;
        --imposter-margin: var(--s0);
        position: var(--imposter-position);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    `,
    `
      el-imposter > :first-child {
        overflow: auto;
        max-width: calc(100% - (var(--imposter-margin) * 2));
        max-height: calc(100% - (var(--imposter-margin) * 2));
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ImposterComponent {
  constructor(private element: ElementRef) {}

  @Input()
  public set position(value: string) {
    setCssVariable(this.element, '--imposter-position', value);
  }

  @Input()
  public set margin(value: string) {
    setCssVariable(this.element, '--imposter-margin', value);
  }
}
