import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Competition } from '../Model/competition';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private http:HttpClient) { }
    private url: String = "http://localhost:8000/";
    
    GetCompetition(page : number):Observable<any>{
        return this.http.get(`${this.url}competition/${page}`);
    }
    
    InsertCompetition(comp : Competition):Observable<any>{
        return this.http.post(`${this.url}competition`,comp);
    }

    GetCompetitionMember():Observable<any>{
      const token = localStorage.getItem("token");
      
      if(token !== null){
        const Payload = jwtDecode(token);
        const idd = Payload.userid;
     
        return this.http.get(`${this.url}competition/member/${idd}`);
      }else{
        const id = null;
        return this.http.get(`${this.url}competition/member/${id}`);
  
      }
    }
  
}
