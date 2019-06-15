import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]'
})
export class DropdownDirectiveDirective {
  @HostBinding('class.open') isOpened = false;

  @HostListener('click') ontoggle() {
    this.isOpened = !this.isOpened;
  }

  constructor() {}
}
