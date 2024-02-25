import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor(private http:HttpClient) { }
  private url: String = "http://localhost:8000/";

  GetMembers(code : any):Observable<any>{
    return this.http.get(`${this.url}member/winners/${code}`);
  }

  CalculeScore(code : any):Observable<any>{
      return this.http.get(`${this.url}hunting/huntings?code=${code}`);
  }
}
