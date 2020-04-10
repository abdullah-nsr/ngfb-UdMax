import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { User } from './user.model';
import { AuthData } from './auth-data.model';

import { Subject } from 'rxjs/Subject'
@Injectable()
export class AuthService {
    authChang = new Subject<boolean>();
    private user: User;

    constructor(private router: Router) { }
    registerUser(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.floor(Math.random() * 10000).toString()
        };
        this.authSuccessfully();
    }
    login(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.floor(Math.random() * 10000).toString()
        };
        this.authSuccessfully();
    }

    logout() {
        this.user = null;
        this.logoutSuccessfully()
    }

    getUser() {
        return { ...this.user } 
    }
    isAuth() {
        return this.user != null;
    }
    private authSuccessfully() {
        this.authChang.next(true);
        this.router.navigate(['/training'])
    }
    private logoutSuccessfully() {
        this.authChang.next(false);
        this.router.navigate(['/login'])
    }
}