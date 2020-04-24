import { Subject } from 'rxjs/Subject';

export class TRload {
    loadingTraining = new Subject<boolean>();
}