import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Orders } from '../orders';
import * as $ from 'jquery';
@Component({
  selector: 'app-adminorders',
  templateUrl: './adminorders.component.html',
  styleUrls: ['./adminorders.component.css']
})
export class AdminordersComponent implements OnInit {

  public nameList:String[];
  public orderList:Orders[];
  public count:number;
  public total:number;
  constructor(public service:AdminService, public router:Router) {
   }

  ngOnInit() {
    this.service.getOrders().subscribe(res=>{
      this.orderList = res;
    })
    this.service.getCount().subscribe(res=>{
      this.count = res;
      
    })
    this.service.getValue().subscribe(res=>{
      this.total = res;
    })    
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });

}
}

