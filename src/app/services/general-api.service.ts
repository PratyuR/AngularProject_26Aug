import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralApiService {
gender=['male','female','other']

  constructor(private http:HttpClient) { }
  getGender():any
  {
    
    return this.gender;
  }
  DisplayUserList():Observable<any>
  {
return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
}
