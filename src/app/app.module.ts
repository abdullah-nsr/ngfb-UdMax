import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireAuthModule } from 'angularfire2/auth'

import { MaterialModule } from './material/material.module';
import { WelcomeComponent } from './welcome/welcome.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component'
// import { StopTrainingComponent } from '../app/training/current-traing/stop-training.component'
import { AuthService } from './auth/auth-service';
import { TrainingService } from './training/training.service';
// import { environmentFireBase } from '../environments/environment.firebase';
import { environment } from '../environments/environment'
import { UIService } from '../app/shared/ui.service';
import { TRload } from '../app/shared/trlod.service'
import { AuthModule } from './auth/auth.module';
import { TrainingModule } from './training/training.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    TrainingModule,
    AuthModule
  ],
  providers: [AuthService, TrainingService, UIService, TRload],
  bootstrap: [AppComponent],
})
export class AppModule { }

