import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ngfb';
  // one way to access local templeat refrence using @ViewChild('localrefrenc'); 
  @ViewChild('sidenavv') sidenavv;
  toggleNavFun(sidenavv) {
    sidenavv.toggle()
    console.log(sidenavv)
  }
}
