import { Observable, Observer } from 'rxjs';

const justObservableValue: Observable<string> = Observable.create(
  (observer: Observer<string>) => {
    observer.next('Some value from next');
    observer.next('Another value');
    observer.complete();
  },
);

justObservableValue.subscribe((v: string) => console.log(v));
