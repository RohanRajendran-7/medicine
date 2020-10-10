import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public admin:number;
  public user:number;
  public adminList:Admin[];
  constructor(public router:Router,public adminservice:AdminService) { }

  ngOnInit() {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
    this.adminservice.adminCount().subscribe(res=>{
      this.admin = res;
    })
    this.adminservice.userCount().subscribe(res=>{
      this.user = res;
    })
    this.adminservice.admins().subscribe(res=>{
      this.adminList = res;
    })
    

  }
  public add():void{
    this.router.navigate(['admin/new']);
  }
  public delete(id:number):void{
    this.adminservice.deleteAdmin(id).subscribe(res=>{
      window.location.reload();
    })  
  }
  public update():void{
    this.router.navigate(['admin/edit']);
  }
}
