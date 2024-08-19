import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  concatMap,
  filter,
  find,
  forkJoin,
  fromEvent,
  interval,
  map,
  of,
  skip,
  skipUntil,
  skipWhile,
  Subscription,
  switchMap,
  take,
  takeUntil,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'rxjs-intro';

  sub: Subscription | undefined;

  ngOnInit(): void {
    // of(1, 2, 3, 4, 5, 6).subscribe((data) => console.log(data));
    // of(1, 2, 3, 4, 5, 6)
    //   .pipe(find((x) => x > 2))
    //   .subscribe((data) => console.log(data));
    // this.sub = of(1, 2, 3, 4, 5, 6)
    //   .pipe(filter((x) => x > 2))
    //   .subscribe((data) => console.log(data));
    // this.sub = of(1, 2, 3, 4, 5, 6)
    //   .pipe(map((x) => x * 10))
    //   .subscribe((data) => console.log(data));
    // this.sub = of(1, 2, 3, 4, 5, 6)
    //   .pipe(tap((x) => console.log(x * 3)))
    //   .subscribe();
    // this.sub = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    //   .pipe(
    //     map((x) => x * 10),
    //     filter((x) => x > 3),
    //     take(5)
    //   )
    //   .subscribe((data) => console.log(data));
    // const frv = fromEvent(document, 'click');
    // this.sub = interval(1000)
    //   .pipe(takeUntil(frv))
    //   .subscribe((data) => console.log(data));
    //   this.sub = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    //     .pipe(skip(5))
    //     .subscribe((data) => console.log(data));

    // this.sub = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    //   .pipe(skipWhile((x) => x <= 2))
    //   .subscribe((data) => console.log(data));

    // const frv = fromEvent(document, 'click');
    // this.sub = interval(1000)
    //   .pipe(skipUntil(frv))
    //   .subscribe((data) => console.log(data));

    const obs1 = of(1, 2, 3, 4, 5);
    const obs2 = of(5, 6, 7, 8, 9, 10);
    const obs3 = of(11, 12, 13, 14, 15);

    // obs1
    //   .pipe(concatMap((x) => obs2.pipe(map((b) => x * b))))
    //   .subscribe((data) => console.log(data));

    // forkJoin([obs1, obs2, obs3]).subscribe((data) => console.log(data));

    // interval(5000)
    //   .pipe(
    //     switchMap((data) => of(1, 2, 3, 4, 5, 6).pipe(tap((x) => x * data)))
    //   )
    //   .subscribe((data) => console.log(data));
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
