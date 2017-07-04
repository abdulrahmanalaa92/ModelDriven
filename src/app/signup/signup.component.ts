import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { SignUp } from 'app/shared/models/signup.interface';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signUpForm: FormGroup; // our model driven form
  public submitted: boolean; // keep track on whether form is submitted
  public events: any[] = []; // use later to display form changes
  constructor(private _formBuilder: FormBuilder) { }
  ngOnInit() {
    this.signUpForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      country:new FormControl(''),
      birthdate: new FormControl('', [Validators.required]),
    });
  }
  signUp(model: SignUp, isValid: boolean) {
    this.submitted = true;
    // check if model is valid
    // if valid, call API to save customer
    console.log(model, isValid);
  }

}
