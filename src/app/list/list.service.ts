import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
  
import { List } from 'src/app/list/list';
@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiURL = "http://localhost:8080/enrollees";
   
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<List[]> {
    return this.httpClient.get<List[]>(this.apiURL);
  }

  find(id): Observable<List> {
    return this.httpClient.get<List>(this.apiURL + '/'+ id)

  }

  update(id, list): Observable<List> {
    return this.httpClient.put<List>(this.apiURL + '/' + id, JSON.stringify(list), this.httpOptions);
  }

}
