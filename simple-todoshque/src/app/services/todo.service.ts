import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ITodo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  API_URL = 'https://jsonplaceholder.typicode.com/todos';
  limit = 10;

  constructor(private http: HttpClient) { }

  getData = (): Observable<ITodo[]> => {
    return this.http.get<ITodo[]>(`${this.API_URL}?_limit=${this.limit}`);
  }

  sendData = (el: ITodo): Observable<any> => {
    return this.http.put(`${this.API_URL}/${el.id}`, el, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  delete = (el: ITodo): Observable<ITodo> => {
    return this.http.delete<ITodo>(`${this.API_URL}/${el.id}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  add = (el: ITodo): Observable<ITodo> => {
    return this.http.post<ITodo>(this.API_URL, el, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
