import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.scss']
})
export class NestedFormComponent implements OnInit {
  nestedForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    const phone = this.formBuilder.group({
      area: [],
      prefix: [],
      line: []
    });

    this.nestedForm = this.formBuilder.group({
      email: '',
      homePhone: phone,
      cellPhone: phone
    });

    this.nestedForm.valueChanges.subscribe(x => console.log(x));
  }
}
