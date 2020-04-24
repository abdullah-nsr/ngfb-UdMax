import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth-service';
import { UIService } from 'src/app/shared/ui.service';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  isLooading: boolean = false;
  private isLoadingSubscription: Subscription;
  constructor(
    private authService: AuthService,
    private uiService: UIService
    ) { }

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
    this.isLoadingSubscription = this.uiService.loadingStateChange.subscribe( isLoadding=> {
      this.isLooading = isLoadding; 
    })
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
  ngOnDestroy() {
    if(this.isLoadingSubscription) { 
      this.isLoadingSubscription.unsubscribe();
    }
  }
}
