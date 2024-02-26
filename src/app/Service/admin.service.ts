import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private url: String = "http://localhost:8000/";
  constructor(private http:HttpClient) { }


  FetchAccount(){
    return this.http.get(`${this.url}admin`);
  }

}
