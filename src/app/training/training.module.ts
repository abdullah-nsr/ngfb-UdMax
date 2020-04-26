import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// import { StopTrainingComponent } from './current-traing/stop-training.component';
import { TrainingComponent } from './training.component';
import { CurrentTraingComponent } from './current-traing/current-traing.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { PastTrainingsComponent } from './past-trainings/past-trainings.component';
import { StopTrainingComponent } from './current-traing/stop-training.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        TrainingComponent,
        CurrentTraingComponent,
        NewTrainingComponent,
        PastTrainingsComponent,
        StopTrainingComponent
    ],
    imports: [
        AngularFirestoreModule,
        SharedModule
    ],
    exports: [],
    entryComponents: [StopTrainingComponent]
})
export class TrainingModule {}