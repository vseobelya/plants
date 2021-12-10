import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class StaticPageService {

  constructor(private http: HttpClient) { }


   getPage(fileName: string): Observable<string> {
        return this.http.get<string>('assets/' + fileName)
        .catch((err, caught) => Observable.of(''));
    }
}
