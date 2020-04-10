import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private authService: AuthService) { }

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
    console.log(this.loginForm);
    this.authService.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    })
  }
  // loginFormSubmit(loginForm:any) {
  //   console.log(loginForm)
  // }
  // testEmailError(object) {
  //   console.log(object)
  // }

}
