import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { AngularFireAuth } from 'angularfire2/auth'

import { Subject } from 'rxjs/Subject'
// import { database } from 'firebase';
import { TrainingService } from '../training/training.service'

// import { MatSnackBar } from '@angular/material/snack-bar';
import { UIService } from '../shared/ui.service'


@Injectable()
export class AuthService {
    authChang = new Subject<boolean>();
    private isAuthenticated: boolean;

    constructor(
        private router: Router,
        private fsAuth: AngularFireAuth,
        private trainingService: TrainingService,
        //private snackbar: MatSnackBar,
        private uiService: UIService
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
        this.uiService.loadingStateChange.next(true);
        this.fsAuth.auth
        .createUserWithEmailAndPassword(authData.email, authData.password)
        .then(result => {
            this.uiService.loadingStateChange.next(false);
            this.isAuthenticated = true;
            console.log(result);

        })
        .catch(error => {
            this.uiService.loadingStateChange.next(false);
            this.uiService.showsnakbar(error.message, null ,3000);
        })
    }

    login(authData: AuthData) {
        this.uiService.loadingStateChange.next(true);
        this.fsAuth.auth
        .signInWithEmailAndPassword(authData.email, authData.password)
        .then(result => {
            this.uiService.loadingStateChange.next(false);
            this.isAuthenticated = true;
        })
        .catch(error => {
            this.uiService.loadingStateChange.next(false);
            this.uiService.showsnakbar(error.message, null ,3000);
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