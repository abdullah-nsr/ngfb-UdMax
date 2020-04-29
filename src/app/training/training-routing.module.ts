import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingComponent } from './training.component';
// import { AuthGuard } from '../auth/auth-guard'

const router: Routes = [
//    { path: '', component: TrainingComponent, canActivate: [AuthGuard] }]
    { path: '', component: TrainingComponent }]
@NgModule({
    imports: [RouterModule.forChild(router)],
    exports: [RouterModule]
})
export class TrainingRoutingModule {}