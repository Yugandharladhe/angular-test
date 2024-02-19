import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  baseUrl="http://reqres.in"
  constructor(private http:HttpClient) { }
  getUsers(page:number):any
  {
    return this.http.get(this.baseUrl+"/api/users?page="+page);
  }
}
