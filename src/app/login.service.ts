import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public url:string;
  public id:number;
  public loggedin:boolean = false;
  public address:string;
  constructor(public http:HttpClient) { 
    this.url ="http://ec2-3-129-67-252.us-east-2.compute.amazonaws.com/:8090/";
  }
  public setLoggedIn(status:boolean):void{
    this.loggedin = status;
  }
  public getLoggedIn():boolean{
    return this.loggedin;
  }
  public setId(id:number):void{
    this.id = id;
  }
  public getId():number{
    return this.id;
  }
  public setaddress(address:string):void{
    this.address = address;
  }
  public getaddress():string{
    return this.address;
  }

  public login(user:User):Observable<User>{
    return this.http.post<User>(this.url+'login',user);
  }
  public signup(user:User):Observable<any>{
    return this.http.post<User>(this.url+'register',user);
  }

}
