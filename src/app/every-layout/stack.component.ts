import { Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'el-stack',
  template: '<ng-content></ng-content>',
  styles: [
    `
      el-stack {
        --stack-margin: var(--s0);
        --stack-split: var(--zero);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        max-width: 100%;
      }
    `,
    `
      el-stack > :first-child:nth-last-child(2) {
        margin-bottom: var(--stack-split);
      }
    `,
    `
      el-stack > * + * {
        margin-top: var(--stack-margin);
      }
    `,
    `
      el-stack:only-child {
        height: 100%;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class StackComponent {
  constructor(private element: ElementRef) {}

  @Input()
  public set split(value: string) {
    this.element.nativeElement.style.setProperty(
      '--stack-split',
      `var(--${value}, ${value})`
    );
  }

  @Input()
  public set margin(value: string) {
    this.element.nativeElement.style.setProperty(
      '--stack-margin',
      `var(--${value}, ${value})`
    );
  }
}
