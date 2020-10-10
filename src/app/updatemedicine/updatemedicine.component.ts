
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-updatemedicine',
  templateUrl: './updatemedicine.component.html',
  styleUrls: ['./updatemedicine.component.css']
})
export class UpdatemedicineComponent implements OnInit {

  public medicine:Medicine;
  public categoryList:Category[];
  public id:number;
  public medicineList:Medicine[];
  constructor(public router:Router,public categoryservice:CategoryService,public adminservice:AdminService,public medicineservice:MedicineService) { 
    this.medicine = new Medicine();
  }

  ngOnInit() {
    this.medicineservice.getMedicines().subscribe(res=>{
      this.medicineList = res;
      this.id = 0;
    })

    this.categoryservice.getAllCategories().subscribe(res=>{
      this.categoryList = res;
    })
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }
  public updateMedicine():void{
    this.medicine.id = this.id;
    this.adminservice.updateMedicine(this.medicine,this.id).subscribe(res=>{
      this.medicine = new Medicine();

      this.router.navigate(['/admin/medicines'])
    })
  }

}
