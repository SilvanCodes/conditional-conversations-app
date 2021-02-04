import { Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { setCssVariable } from 'src/app/core/utility';

@Component({
  selector: 'el-frame',
  template: '<ng-content></ng-content>',
  styles: [
    `
      el-frame {
        --frame-n: 9;
        --frame-d: 16;
        padding-bottom: calc(var(--frame-n) / var(--frame-d) * 100%);
        position: relative;
      }
    `,
    `
      el-frame > * {
        overflow: hidden;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `,
    `
      el-frame > img,
      el-frame > video {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class FrameComponent {
  constructor(private element: ElementRef) {}

  @Input()
  public set n(value: string) {
    setCssVariable(this.element, '--frame-n', value);
  }
  @Input()
  public set d(value: string) {
    setCssVariable(this.element, '--frame-d', value);
  }
}
