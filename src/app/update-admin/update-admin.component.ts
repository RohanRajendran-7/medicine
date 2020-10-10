import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {

  public adminList:Admin[];
  public admin:Admin;
  public id:number;
  constructor(public router:Router, public service:AdminService ) {
    this.admin = new Admin();
   }

  ngOnInit() {
    this.service.admins().subscribe(res=>{
      this.adminList = res;
    })
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

  public updateAdmin():void{
    this.admin.id = this.id;
    this.service.updateAdmin(this.admin,this.admin.id).subscribe(res=>{
      this.admin = new Admin();
      this.router.navigate(['admin']);
    })
  }
}
