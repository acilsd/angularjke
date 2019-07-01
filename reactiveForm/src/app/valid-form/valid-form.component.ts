import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-valid-form',
  templateUrl: './valid-form.component.html',
  styleUrls: ['./valid-form.component.scss']
})
export class ValidFormComponent implements OnInit {
  validForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.validForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      numField: [null, [Validators.required, Validators.min(18)]],
      check: [false, [Validators.requiredTrue]]
    });
  }

  get email() {
    return this.validForm.get('email');
  }

  get password() {
    return this.validForm.get('password');
  }

  get numField() {
    return this.validForm.get('numField');
  }

  get check() {
    return this.validForm.get('check');
  }
}
