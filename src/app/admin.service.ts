import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';
import { Category } from './category';
import { Medicine } from './medicine';
import { Orders } from './orders';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public url:string;
  constructor(private http:HttpClient) { 
    this.url = "http://ec2-3-129-67-252.us-east-2.compute.amazonaws.com/:8090/admin/"
  }
  public adminLogin(admin:Admin):Observable<Admin>{
    return this.http.post<Admin>(this.url+'login',admin);
  }
  public deleteMedicine(id:number):Observable<any>{
    return this.http.delete<Number>(this.url+'medicine/'+id);
  }
 public updateMedicine(medicine:Medicine,id:number):Observable<any>{
   return this.http.put<Medicine>(this.url+'medicine/update/'+id,medicine);
 }
 public getCategories():Observable<Category[]>{
   return this.http.get<Category[]>(this.url+'categories');
 }
 public addCategory(categories:Category):Observable<Category>{
  return this.http.post<Category>(this.url+'categories/add',categories)
}
public addMedicine(medicine:Medicine):Observable<Medicine>{
  return this.http.post<Medicine>(this.url+'medicine/add',medicine)
}
public deleteCategory(id:number):Observable<any>{
 
  return this.http.delete<Category>(this.url+'categories/delete/'+id);
}
public updateCategory(category:Category,id:number):Observable<any>{
  return this.http.put<Category>(this.url+'categories/update/'+id,category);
}
public adminCount():Observable<number>{
  return this.http.get<number>('http://ec2-3-129-67-252.us-east-2.compute.amazonaws.com/:8090/admins/count');
}
public userCount():Observable<number>{
  return this.http.get<number>('http://ec2-3-129-67-252.us-east-2.compute.amazonaws.com/:8090/users/count');
}
public admins():Observable<Admin[]>{
  return this.http.get<Admin[]>('http://ec2-3-129-67-252.us-east-2.compute.amazonaws.com/:8090/admins');
}
public addAdmin(admin:Admin):Observable<Admin>{
  return this.http.post<Admin>(this.url+'add',admin);
}
public deleteAdmin(id:number):Observable<any>{
 
  return this.http.delete<Admin>(this.url+id);
}
public updateAdmin(admin:Admin,id:number):Observable<any>{
  return this.http.put<Admin>(this.url+'update/'+id,admin);
}
public getName(address:string):Observable<String>{
  return this.http.get<String>('http://ec2-3-129-67-252.us-east-2.compute.amazonaws.com/:8090/user/name/'+address);
}
public getOrders():Observable<Orders[]>{
  return this.http.get<Orders[]>('http://ec2-3-129-67-252.us-east-2.compute.amazonaws.com/:8090/orders');
}
public getCount():Observable<number>{
  return this.http.get<number>('http://ec2-3-129-67-252.us-east-2.compute.amazonaws.com/:8090/orders/count');
}
public getValue():Observable<number>{
  return this.http.get<number>('http://ec2-3-129-67-252.us-east-2.compute.amazonaws.com/:8090/orders/value');
}
}
