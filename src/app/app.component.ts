import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, find, map, of, Subscription, take, tap } from 'rxjs';

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

    this.sub = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
      .pipe(
        map((x) => x * 10),
        filter((x) => x > 3),
        take(5)
      )
      .subscribe((data) => console.log(data));
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
