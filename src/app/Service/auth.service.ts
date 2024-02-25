import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Compte, Login } from '../Model/Compte';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: String = "http://localhost:8000/";
  constructor(private http:HttpClient) { }

  Register(compte : Compte){
    return  this.http.post(`${this.url}auth/register`,compte);
  }

  Login(compte:Login){
    return this.http.post(`${this.url}auth/login`,compte);
  }


}
