import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Category } from '../category';
import * as $ from 'jquery';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  public category:Category;
  public id:number;
  public categoryList:Category[];
  constructor(public router:Router,public service:AdminService) { 
    this.category = new Category();
  }

  ngOnInit() {
    this.service.getCategories().subscribe(res=>{
      this.categoryList = res;
    })
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

  public updateCategory():void{
    this.category.id = this.id;
    this.service.updateCategory(this.category,this.id).subscribe(res=>{
      this.category = new Category();
    })
    this.router.navigate(['admin/categories']);
  }
}
