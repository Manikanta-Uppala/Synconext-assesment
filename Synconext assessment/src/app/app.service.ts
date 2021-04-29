import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './Users';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    const url = 'https://narayan.iqnext.io/places/';
    return this.http.get<Users[]>(url);
  }
}
