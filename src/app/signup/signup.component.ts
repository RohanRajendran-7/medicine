import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user:User;
  constructor(public service:LoginService, public router:Router) { 
    this.user = new User();
  }
  

  ngOnInit() {
  }

  public signup():void{
    this.service.signup(this.user).subscribe(res=>{
      this.user = new User();
    })
    this.router.navigate(['login']);
  }

}
