import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { MedicineComponent } from './medicine/medicine.component'
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { LoginComponent } from './login/login.component';
import { AdminordersComponent } from './adminorders/adminorders.component';
import { AdminmedicinesComponent } from './adminmedicines/adminmedicines.component';
import { UpdatemedicineComponent } from './updatemedicine/updatemedicine.component';
import { PaymentComponent } from './payment/payment.component';
import { SuccessComponent } from './success/success.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdmincategoriesComponent } from './admincategories/admincategories.component';
import { AddmedicineComponent } from './addmedicine/addmedicine.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { HomeComponent } from './home/home.component';
import { AddPinComponent } from './add-pin/add-pin.component';


@NgModule({
  declarations: [
    AppComponent,
    MedicineComponent,
    CartComponent,
    CheckoutComponent,
    ModalComponent,
    LoginComponent,
    AdminordersComponent,
    AdminmedicinesComponent,
    UpdatemedicineComponent,
    PaymentComponent,
    SuccessComponent,
    SignupComponent,
    DashboardComponent,
    AdmincategoriesComponent,
    AddmedicineComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
    AddAdminComponent,
    UpdateAdminComponent,
    HomeComponent,
    AddPinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  
 }
 