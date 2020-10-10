import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { LoginService } from '../login.service';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public total:number;
  public save:number;
  public medicine:Medicine;
  public cartobj:Cart;
  public count:number;
  public quantity:number=0;
  public toggle:boolean = true;
  public toggle1:boolean = false;
  public cartList:Cart[];
  private id:number;
  constructor(private loginservice:LoginService,public medicineservice:MedicineService, public http:HttpClient,public router:Router,public cartservice:CartService) { 
    this.medicine = new Medicine();
    this.cartobj = new Cart();
  }

  ngOnInit() {
    this.id = this.loginservice.getId();
    this.cartservice.getCart(this.id).subscribe(res=>{
      this.cartList = res;
      
    })
    this.medicineservice.getTotal(this.id).subscribe(res=>{
      this.total = res;
    })
  }

  public getCart():void{
    this.cartservice.getCart(this.id).subscribe(res=>{
      this.cartList = res;
    })
  }

  public delete(id:number):void{
    this.cartservice.delete(id).subscribe(res=>{
      this.router.navigate(['/cart']);
      window.location.reload();
    });
  }
  public product(name:string):void{
    
    this.medicineservice.getProduct(name).subscribe(res=>{
      this.medicine = res;
    });
    this.toggle = false;
  }
  public cart():void{
    this.toggle1 = true;
  }
  public add():void{
    this.quantity= this.quantity+1;
  }
  public sub():void{
    this.quantity= this.quantity-1;
  }
  public addCart(medicine:Medicine):void{
    this.cartobj.setQuantity(this.quantity);
    this.cartobj.id = medicine.id;
    this.cartobj.setName(medicine.med_name);
    this.cartobj.price = medicine.price;
    this.cartobj.total = (medicine.price * this.quantity);
    this.cartobj.amount = (medicine.amount * this.quantity);
    console.log(medicine.amount);
    this.cartobj.category = medicine.category;
    this.cartservice.add(this.cartobj).subscribe(res=>{
      this.count = this.count+1;
      this.save = ( (medicine.amount*this.quantity)-this.cartobj.total);
    })
    this.toggle=true;
    window.location.reload();
  }
  public checkout():void{
    this.router.navigate(['checkout']);
  }
}
