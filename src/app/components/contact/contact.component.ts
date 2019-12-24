import { Component, OnInit } from "@angular/core";

import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';

@Component({
    selector: "app-contact",
    templateUrl: "./contact.component.html",
    styleUrls: ["./contact.component.less"]
})

export class ContactComponent implements OnInit {
    ngOnInit(): void {
        
    }
    validateForm: FormGroup;

  submitForm(value: any): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    console.log(value);
  }


  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
        name: [''],
        email: ['', [Validators.email, Validators.required]],
        comment: ['', [Validators.required]]
    });
  }
}