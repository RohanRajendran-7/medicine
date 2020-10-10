import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { CategoryService } from '../category.service';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import * as $ from 'jquery';
import { Category } from '../category';
@Component({
  selector: 'app-adminmedicines',
  templateUrl: './adminmedicines.component.html',
  styleUrls: ['./adminmedicines.component.css']
})
export class AdminmedicinesComponent implements OnInit {

  public medicineList:Medicine[];
  public categoryList:Category[];
  public medicine:Medicine;
  public search:string;
  public searchToggle:boolean;
  public cartList:Cart[];
  public cartobj:Cart;
  public category:string;
  public toggle:boolean;
  public quantity:number=0;
  public count:number;
  public sort:string;
  constructor(public router:Router,public medicineservice:MedicineService, public categoryservice:CategoryService,public adminservice:AdminService) { }

  ngOnInit() {
    this.medicineservice.getMedicines().subscribe(res=>{
      this.medicineList = res;
      this.cartobj = new Cart();
    })
    this.categoryservice.getAllCategories().subscribe(res=>{
      this.categoryList = res;
    })
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
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
  public delete(id:number):void{
    this.adminservice.deleteMedicine(id).subscribe(res=>{
      this.router.navigate(['/admin']);
      window.location.reload();
    })
  }
  public add():void{
    this.router.navigate(['admin/add']);
  }
  public update():void{
    this.router.navigate(['admin/update']);
  }
  public searchMedicine():void{
    this.medicineservice.getProduct(this.search).subscribe(res=>{
      console.log(res.price)
      this.medicine=res;
      this.searchToggle = true;
    })
  }
}
