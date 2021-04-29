import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from './Users';

@Injectable({
  providedIn: 'root'
})
export class MultiplefilterService {

  constructor(private http: HttpClient) { }

  url:string = 'http://localhost:3000/Users';
  getUsers(): any{
     return this.http.get<Users[]>(this.url);
  }
}
