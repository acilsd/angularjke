import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-array-form',
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.scss']
})
export class ArrayFormComponent implements OnInit {
  arrayForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.arrayForm = this.formBuilder.group({
      email: '',
      phones: this.formBuilder.array([])
    });

    this.arrayForm.valueChanges.subscribe(x => console.log(x));
  }

  get getPhones() {
    return this.arrayForm.get('phones') as FormArray;
  }

  onAddPhone() {
    const phone = this.formBuilder.group({
      area: [],
      prefix: [],
      line: []
    });

    this.getPhones.push(phone);
  }

  onDeletePhone(idx: number) {
    this.getPhones.removeAt(idx);
  }
}
