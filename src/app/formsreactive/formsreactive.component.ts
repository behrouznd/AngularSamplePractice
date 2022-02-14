import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formsreactive',
  templateUrl: './formsreactive.component.html',
  styleUrls: ['./formsreactive.component.css']
})
export class FormsreactiveComponent implements OnInit {

  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.myForm = new FormGroup({

      "userName": new FormControl("Tom", [Validators.required, this.userNameValidator]),
      "userEmail": new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      "phones":   formBuilder.array([
        ["+7", Validators.required]
      ])
    });
  }
  getFormsControls(): FormArray {
    return this.myForm.controls['phones'] as FormArray;
  }
  addPhone() {
    (<FormArray>this.myForm.controls["phones"]).push(new FormControl("+7", Validators.required));
  }
  submit() {
    console.log(this.myForm);
  }

   

  ngOnInit(): void {
  }
   
  userNameValidator(control: FormControl): { [s: string]: boolean } | null {
    if (control.value === "behrouz") {
      return { "userName": true };
    }
    return null;
  }
}
