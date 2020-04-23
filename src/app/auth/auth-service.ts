import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { AngularFireAuth } from 'angularfire2/auth'

import { Subject } from 'rxjs/Subject'
// import { database } from 'firebase';
import { TrainingService } from '../training/training.service'


@Injectable()
export class AuthService {
    authChang = new Subject<boolean>();
    private isAuthenticated: boolean;

    constructor(
        private router: Router,
        private fsAuth: AngularFireAuth,
        private trainingService: TrainingService
    ) { }
    
    initAuthListener() {
        this.fsAuth.authState.subscribe(user => {
            if(user) {
                this.isAuthenticated = true;
                this.authChang.next(true);
                this.router.navigate(['/training'])
            } else {
                this.trainingService.canselSubscription()
                this.authChang.next(false);
                this.router.navigate(['/login'])
                this.isAuthenticated = false;
            }
        })
    }

    registerUser(authData: AuthData) {
        this.fsAuth.auth
        .createUserWithEmailAndPassword(authData.email, authData.password)
        .then(result => {
            this.isAuthenticated = true;
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        })
    }

    login(authData: AuthData) {
        this.fsAuth.auth
        .signInWithEmailAndPassword(authData.email, authData.password)
        .then(result => {
            this.isAuthenticated = true;
        })
        .catch(error => {
            console.log(error);
        })
    }

    logout() {
        this.fsAuth.auth.signOut()
    }
    isAuth() {
        return this.isAuthenticated;
    }
    // private authSuccessfully() {

    // }
    // private logoutSuccessfully() {

    // }
}