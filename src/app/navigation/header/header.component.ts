import { Component, OnInit, EventEmitter, Input, Output, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth-service';
import { Subscription } from 'rxjs/Subscription'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuth = false;
  authSubscription: Subscription;

  @Output() sidenavListToggel = new EventEmitter<void>() 

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authSubscription = this.authService.authChang.subscribe((authState) => {
      this.isAuth = authState;
    })
  }
  
  ToTogglenavList(){
    this.sidenavListToggel.emit();
  }

  onLogout(){
    this.authService.logout()
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe()
  }
}
