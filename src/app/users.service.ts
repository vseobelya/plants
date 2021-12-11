import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpResponse} from '@angular/common/http';
// import { HttpParams, RequestOptions} from '@angular/common/http';
import { HttpParams} from '@angular/common/http';

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
       return this.http.get<User[]>('php/users_get.php', {responseType: 'json'})
       .catch((err, caught) => Observable.of(''));
  }

  getUser(id: string): Observable<User> {
      // const params = new HttpParams();
      // params.set('id', id);
      const options = {params: new HttpParams().set('id', id)}
      // const options = new RequestOptions({params: params});
      // return this.http.get<string>('php/users_get.php', options)
      return this.http.get<User>('php/users_get.php', options)
      .catch((err, caught) => Observable.of(''));
  }

  setUser(user: User): Observable<User> {
      const data = JSON.stringify(user);
      return this.http.post<User>('php/users_set.php', data, {responseType: 'json'});
  }

  deleteUser(id: number): Observable<any> {
      const data = JSON.stringify({id: id, mode: 'delete'});
      return this.http.pos<any>t('php/users_set.php', data, {responseType: 'json'});
  }






}
