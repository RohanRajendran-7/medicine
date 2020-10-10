import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddPinComponent } from './add-pin/add-pin.component';
import { AddmedicineComponent } from './addmedicine/addmedicine.component';
import { AdmincategoriesComponent } from './admincategories/admincategories.component';
import { AdminmedicinesComponent } from './adminmedicines/adminmedicines.component';
import { AdminordersComponent } from './adminorders/adminorders.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MedicineComponent } from './medicine/medicine.component';
import { ModalComponent } from './modal/modal.component';
import { PaymentComponent } from './payment/payment.component';
import { SignupComponent } from './signup/signup.component';
import { SuccessComponent } from './success/success.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { UpdatemedicineComponent } from './updatemedicine/updatemedicine.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'medicine',component:MedicineComponent},
  {path:'cart',component:CartComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'modal',component:ModalComponent},
  {path:'login',component:LoginComponent},
  {path:'admin',component:DashboardComponent},
  {path:'admin/medicines',component:AdminmedicinesComponent},
  {path:'admin/orders',component:AdminordersComponent},
  {path:'admin/categories',component:AdmincategoriesComponent},
  {path:'admin/categories/add',component:AddCategoryComponent},
  {path:'admin/categories/update',component:UpdateCategoryComponent},
  {path:'admin/update',component:UpdatemedicineComponent},
  {path:'admin/add',component:AddmedicineComponent},
  {path:'admin/new',component:AddAdminComponent},
  {path:'admin/edit',component:UpdateAdminComponent},
  {path:'payment', component:PaymentComponent},
  {path:'success',component:SuccessComponent},
  {path:'signup',component:SignupComponent},
  {path:'admin/pin',component:AddPinComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
