import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, subscribeOn, filter, tap } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  serverUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getUsers1 = () => {
    return of(['Jane', 'Mike', 'Jose']).pipe(
      map((x) => {
        let va = 'update';
        for (let data in x) {
          x[data] = 'update' + x[data];
        }
        return x;
      })
    );
  };

  getTxn = () => {
    return of('Test');
  };

  getUsers(): Observable<User[]> {
    return this.http.get(`${this.serverUrl}/users`).pipe(
      map((x: any) => {
        return x.filter((data: User) => data.active);
      })
    );
  }

  getBooks() {
    return this.http.get(`${this.serverUrl}/books`).pipe(tap((x) => x));
  }

  createUser(user: User) {
    return this.http
      .post(`${this.serverUrl}/users`, user)
      .pipe(tap((x) => console.log('creating', x)));
  }

  updateUser(user: User) {
    return this.http
      .put(`${this.serverUrl}/users/${user.id}`, user)
      .pipe(tap((x) => console.log('creating', x)));
  }

  deleteUser(id: any) {
    console.log('deleting id:' + id);
    return this.http
      .delete(`${this.serverUrl}/users/${id}`)
      .pipe(tap((x) => console.log('after delete: ', x)));
  }
}
