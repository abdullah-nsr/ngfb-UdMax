import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }), 
      password: new FormControl('', {
        validators: [Validators.required, Validators.minLength(8)]
      }),
      remember: new FormControl(true)
    }
    );
  }
  onSubmit() {
    console.log(this.loginForm)
  }
  // loginFormSubmit(loginForm:any) {
  //   console.log(loginForm)
  // }
  // testEmailError(object) {
  //   console.log(object)
  // }

}
