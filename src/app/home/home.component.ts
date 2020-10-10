import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { PinService } from '../pin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public categoryList:Category[];  
  public pin:string;
  public toggle:boolean;
  public temp:any;
  constructor(public pinservice:PinService,public router:Router, public service:AdminService,public categoryservice:CategoryService) { }

  ngOnInit() {
    this.categoryservice.getAllCategories().subscribe(res=>{
      this.categoryList = res;
    })
  }
  public medicine():void{
    this.router.navigate(['medicine']);
  }

  public check():void{
    this.pinservice.verify(this.pin).subscribe(res=>{
      if(res == this.pin){
        this.toggle = true;
      }
      else{
        this.toggle = false;
      }
    })
  }
}
