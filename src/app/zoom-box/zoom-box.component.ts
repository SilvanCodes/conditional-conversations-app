import { Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ccs-zoom-box',
  template: '<div><ng-content></ng-content></div>',
  styles: [
    `
      ccs-zoom-box {
        --zoom-box-border: var(--s-5);
        --zoom-box-padding: var(--s0);
        background-color: black;
        cursor: pointer;
      }
    `,
    `
      ccs-zoom-box > :only-child {
        margin: var(--zoom-box-border);
        padding: var(--zoom-box-padding);
        box-shadow: 0 0 0 0 #fff;
        transition: box-shadow 0.3s ease-out;
        background-color: white;
      }
    `,
    `
      ccs-zoom-box:hover > :only-child {
        box-shadow: 0 0 0 calc(var(--zoom-box-border) * 0.5) #fff;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ZoomBoxComponent {
  constructor(private element: ElementRef) {}

  @Input()
  public set padding(value: string) {
    this.element.nativeElement.style.setProperty(
      '--zoom-box-padding',
      `var(--${value}, ${value})`
    );
  }

  @Input()
  public set border(value: string) {
    this.element.nativeElement.style.setProperty(
      '--zoom-box-border',
      `var(--${value}, ${value})`
    );
  }
}
