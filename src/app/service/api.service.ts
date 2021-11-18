import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IData } from '../register/data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = "http://localhost:3000/students"
  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type':'application/x-www-form-urlencoded'
    })
  }

  constructor(private httpClient:HttpClient){}

  // create(emp:IData){
  //   this.httpClient.post<IData>(this.url,JSON.stringify(emp)).subscribe(
  //     data => console.log("success!", data),
  //     error => console.error("couldn't post because", error)
  // );
  // }

  createUser(user: any): Observable<Object> {
    return this.httpClient.post(`${this.url}`, user);
  }

  getData(){
    return this.httpClient.get<IData[]>(`${this.url}`);
  }


}



