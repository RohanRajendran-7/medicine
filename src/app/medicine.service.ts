import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  public url:string; 
  constructor(public http:HttpClient ) {
    this.url = "http://ec2-3-129-67-252.us-east-2.compute.amazonaws.com/:8090";
  }

  public getMedicines():Observable<Medicine[]>{
    return this.http.get<Medicine[]>(this.url+'/medicines');
  }

  public getMedicinePrices(category:string):Observable<Medicine[]>{
    return this.http.get<Medicine[]>(this.url+'/medicines/sort/price/'+category);
  }
  public getMedicineNames(category:string):Observable<Medicine[]>{
    return this.http.get<Medicine[]>(this.url+'/medicines/sort/name/'+category);
  }
  public getProduct(name:string):Observable<Medicine>{
    return this.http.get<Medicine>(this.url+'/medicine/'+name);
  }
  public getTotal(id:number):Observable<number>{
    return this.http.get<number>(this.url+'/medicines/total/'+id);
  }
  public getPrice():Observable<number>{
    return this.http.get<number>(this.url+'/medicines/price');
  }
  public getAmount():Observable<number>{
    return this.http.get<number>(this.url+"/medicines/discount");
  }
}
