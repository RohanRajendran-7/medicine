import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  public confirm:string;
  public total:number;
  public id:number;
  constructor(public loginservice:LoginService, public http:HttpClient,public medicineservice:MedicineService, public router:Router) { }

  ngOnInit() {
    this.id = this.loginservice.getId();
    this.medicineservice.getTotal(this.id).subscribe(res=>{
      this.total = res;
    })
  }
  public pay():void{
    this.router.navigate(['/success'])
  }

}
