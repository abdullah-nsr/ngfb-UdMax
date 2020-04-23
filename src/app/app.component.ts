import { Component, ViewChild, OnInit } from '@angular/core';
import { TrainingService } from '../app/training/training.service';
import { AuthService } from '../app/auth/auth-service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private trainingService: TrainingService,
    private authService: AuthService 
  ) {}

  title = 'ngfb';
  // one way to access local templeat refrence using @ViewChild('localrefrenc'); 
  @ViewChild('sidenavv') sidenavv;
  toggleNavFun(sidenavv) {
    sidenavv.toggle()
    console.log(sidenavv)
  }
  ngOnInit() {
    this.authService.initAuthListener();
  }

}
