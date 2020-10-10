import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './cart.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'medicare';
  public count:number;
  public loggedin:boolean;
  public isShown:boolean = false;
  constructor(private router:Router,private cartservice:CartService,private loginservice:LoginService){
    this.cartservice.getCartCount().subscribe(res=>{
      this.count = res;
    })
    this.loggedin = this.loginservice.getLoggedIn()
  }
  ngOnInit() {
    this.loggedin = this.loginservice.getLoggedIn();
  }
  public medicine():void{
    this.router.navigate(['/medicine']);
  }
  public cart():void{
    this.router.navigate(['/cart'])
  }

  public cartCount():void{
    this.cartservice.getCartCount().subscribe(res=>{
      this.count = res;
    })
  }
  public login():void{
    this.loggedin = true;
    this.router.navigate(['/login'])
  }
  public logout():void{
    this.loggedin = false;
    this.router.navigate(['/login'])
  }

}

