import { Component, OnInit } from "@angular/core";

import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: "app-contact",
    templateUrl: "./contact.component.html",
    styleUrls: ["./contact.component.less"]
})

export class ContactComponent implements OnInit {

    email: FormGroup;

    constructor(private fb: FormBuilder, private http: HttpClient) {
      this.validateForm = this.fb.group({
          name: [''],
          about: [''],
          email: ['', [Validators.email, Validators.required]],
          comment: ['', [Validators.required]]
      });
    }

    ngOnInit(): void {
        this.email = this.fb.group({
          name: [''],
          text: ['']
        })
    }
    validateForm: FormGroup;

  submitForm(value: any): void {
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    console.log(value);
    
    this.http.post('https://formsubmit.co/leonardo@roffor.com.br', {
      name: value.name,
      email: value.email
    },
    {
      observe: 'body',
      responseType: 'json'
    }).subscribe(
      (val) => {
          console.log("POST call successful value returned in body", 
                      val);
      },
      response => {
          console.log("POST call in error", response);
      },
      () => {
          console.log("The POST observable is now completed.");
      });;

  }

  
}