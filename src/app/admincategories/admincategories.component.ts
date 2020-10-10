import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-admincategories',
  templateUrl: './admincategories.component.html',
  styleUrls: ['./admincategories.component.css']
})
export class AdmincategoriesComponent implements OnInit {

  public categoryList:Category[];
  public id:number;
  public category:Category;
  public categoryToggle:boolean;
  constructor(public service:AdminService,public router:Router) { 
    this.category = new Category();
  }

  ngOnInit() {
    this.service.getCategories().subscribe(res=>{
      this.categoryList = res;
      this.categoryToggle = false;
    })
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }
  public add():void{
    this.categoryToggle=true;
    this.router.navigate(['admin/categories/add'])
  }
  public delete(id:number):void{
    this.service.deleteCategory(id).subscribe(res=>{
      this.category = new Category();
    })
    this.router.navigate(['admin/categories']);
  }
  public update():void{
    this.router.navigate(['admin/categories/update']);
  }


}
