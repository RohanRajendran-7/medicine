import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../cart';
import { CartService } from '../cart.service';

import { LoginService } from '../login.service';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { OrderService } from '../order.service';
import { Orders } from '../orders';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public cartList:Cart[];

  public total:number;
  public price:number;
  public order:Orders;
  public id:number;
  public categoryList:string[];
  public today: Date = new Date();
  public discount:number;
  public loggedin:boolean;
  public address:string;
  constructor(public cartservice:CartService,public orderservice:OrderService,public router:Router,public loginservice:LoginService,public medicineservice:MedicineService) { 
    this.order = new Orders();
  }

  ngOnInit() {
    this.id = this.loginservice.getId();
    this.cartservice.getCart(this.id).subscribe(res=>{
      this.cartList = res;
    })
    this.medicineservice.getTotal(this.id).subscribe(res=>{
      this.total = res;
    })
    this.medicineservice.getPrice().subscribe(res=>{
      this.price = res;
    })
    this.medicineservice.getAmount().subscribe(res=>{
      this.discount = res;
    })
    this.cartservice.getCategory().subscribe(res=>{
      this.categoryList = res;
    })
    this.loggedin = this.loginservice.getLoggedIn();
    this.address = this.loginservice.getaddress();

  }

  public getCart():void{
    this.cartservice.getCart(this.id).subscribe(res=>{
      this.cartList = res;
    })
  }
  public login():void{
    this.loggedin = true;
    this.router.navigate(['/modal']);   
  }

  public pay():void{
    
    this.order.address = this.address;
    this.order.value = this.total;
    this.orderservice.addOrder(this.order).subscribe(res=>{
      this.order = new Orders();
    });
    this.router.navigate(['/payment']);
  }


}
