import { Subject } from 'rxjs/Subject'
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable()
export class UIService {

    constructor(private snakbar: MatSnackBar) {}
    showsnakbar(message, action, duration) { 
        this.snakbar.open(message, action, {
            duration: duration
        })
    }
    loadingStateChange =new Subject<boolean>();

}