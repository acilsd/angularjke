import { Component, OnInit, Input } from '@angular/core';

interface IOptions {
  title: string;
  value: string;
}

@Component({
  selector: 'form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss']
})
export class FormSelectComponent implements OnInit {
  @Input() options: IOptions[] = [];
  private innerVal = '';
  private isOpened = false;
  public placeholder = 'Select';

  constructor() {}

  set value(val: string) {
    if (val !== this.innerVal) {
      this.innerVal = val;
      this.isOpened = false;
    }
  }

  get value(): string {
    return this.innerVal;
  }

  get isOpen(): boolean {
    return this.isOpened;
  }

  public onToggleOpen() {
    this.isOpened = !this.isOpened;
  }

  public onSelect(item: IOptions) {
    this.value = item.value;
    this.placeholder = item.title;
  }

  ngOnInit() {}
}
