import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpResponse} from '@angular/common/http';
import { URLSearchParams, RequestOptions} from '@angular/common/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
       return this.http.get<string>('php/users_get.php')
       .catch((err, caught) => Observable.of(''));
  }

  getUser(id: string): Observable<User> {
      const params = new URLSearchParams();
      params.set('id', id);
      const options = new RequestOptions({params: params});
      return this.http.get<string>('php/users_get.php', options)
      .catch((err, caught) => Observable.of(''));
  }

  setUser(user: User): any {
      const data = JSON.stringify(user);
      return this.http.post<string>('php/users_set.php', data);
  }

  deleteUser(id: number): any {
      const data = JSON.stringify({id: id, mode: 'delete'});
      return this.http.post<string>('php/users_set.php', data);
  }






}
