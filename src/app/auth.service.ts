import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private role: string = '';

  constructor(private http: HttpClient) { }

  login(credentials: string): Observable<string> {
     const data = JSON.stringify(credentials);
     const options = {params: new HttpParams().set('action', 'login')}
     // const params = new HttpParams();
     // params.set('action', 'login');
     // const options: RequestOptions = new RequestOptions({ params: params });
     // return this.http.post<string>('php/auth.php', data, params);
     return this.http.post<string>('php/auth.php', data, options);
   }


   logout(): Observable<string> {
     // const params = new HttpParams();
     // params.set('action', 'logout');
     const options = {params: new HttpParams().set('action', 'logout')}
     // const options: RequestOptions =     new RequestOptions({ params: params });
     return this.http.get<string>('php/auth.php', options);
   }




}
