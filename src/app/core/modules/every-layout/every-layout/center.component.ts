import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'el-center',
  template: '<ng-content></ng-content>',
  styles: [
    `
      el-center {
        margin-left: auto;
        margin-right: auto;
        box-sizing: content-box;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class CenterComponent {}
