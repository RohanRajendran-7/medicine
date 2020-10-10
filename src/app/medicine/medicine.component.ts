import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { LoginService } from '../login.service';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {

  public medicineList:Medicine[];
  public medicine:Medicine;
  public categoryList:Category[];
  public cartList:Cart[];
  public searchToggle:boolean;
  public cartobj:Cart;
  public search:string;
  public category:string;
  public toggle:boolean;
  public loggedin:boolean;
  public quantity:number=0;
  public count:number;
  public address:any;
  public sort:string;
  constructor(public loginservice:LoginService,public medicineservice:MedicineService,public router:Router, public categoryservice:CategoryService,public cartservice:CartService) { }

  ngOnInit() {
    this.address = this.loginservice.getId();
    this.loggedin = this.loginservice.getLoggedIn();
    this.medicineservice.getMedicines().subscribe(res=>{
      this.medicineList = res;
      this.cartobj = new Cart();
    })
    this.categoryservice.getAllCategories().subscribe(res=>{
      this.categoryList = res;
    })
  }

  public filter():void{
    this.categoryservice.getAllFiltered(this.category).subscribe(res=>{
      this.medicineList= res;
    });
  }
  public sorted():void{
    if(this.sort == 'price'){
      this.medicineservice.getMedicinePrices(this.category).subscribe(res=>{
        this.medicineList = res;
      })
    }
    else if (this.sort == 'Name'){
      this.medicineservice.getMedicineNames(this.category).subscribe(res=>{
        this.medicineList = res
      })
    }
    }
  public reset():void{
    this.medicineservice.getMedicines().subscribe(res=>{
      this.medicineList = res;
    })
  }  
  public cart():void{
    this.toggle = true;
  }
  public add():void{
    this.quantity= this.quantity+1;
  }
  
  public sub():void{
    this.quantity= this.quantity-1;
  }
  public addCart(medicine:Medicine):void{
    this.cartobj.userid = this.address;
    console.log(this.address)
    this.cartobj.setQuantity(this.quantity);
    this.cartobj.id = medicine.id;
    this.cartobj.setName(medicine.med_name);
    this.cartobj.price = medicine.price;
    this.cartobj.total = (medicine.price * this.quantity);
    this.cartobj.amount = (medicine.amount * this.quantity);
    this.cartservice.add(this.cartobj).subscribe(res=>{
      this.count = this.count+1;
    })
    this.router.navigate(['cart']);

  }

  public searchMedicine():void{
    this.medicineservice.getProduct(this.search).subscribe(res=>{
      console.log(res.price)
      this.medicine=res;
      this.searchToggle = true;
    })
  }
  }
