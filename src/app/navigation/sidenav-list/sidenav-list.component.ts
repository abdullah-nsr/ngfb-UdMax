import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription'
import { AuthService } from 'src/app/auth/auth-service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  isAuth: boolean;
  authSubscriber : Subscription;
  @Output() sidenavClose = new EventEmitter<void>()
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authSubscriber = this.authService.authChang.subscribe((result) => {
      this.isAuth = result;
    })
  }

  toSidenavClose() {
    this.sidenavClose.emit();
  }

  onLogout() { 
    this.toSidenavClose();
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authSubscriber.unsubscribe();
  }
}
