import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddcartComponent } from './addcart/addcart.component';
import { AddmedicineComponent } from './addmedicine/addmedicine.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdmindetailsComponent } from './admindetails/admindetails.component';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { EditMedicineComponent } from './edit-medicine/edit-medicine.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MedicineComponent } from './medicine/medicine.component';
import { MedicinedetailsComponent } from './medicinedetails/medicinedetails.component';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';
import { OrdersummaryComponent } from './ordersummary/ordersummary.component';
import { PaymentComponent } from './payment/payment.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  {"path":"registration",component:RegistrationComponent},
  {"path":"login",component:LoginComponent},
  {"path":"userlist",component:UserlistComponent},
  {"path":"userdetails/:id",component:UserdetailsComponent},
  {"path":"edit-user/:id",component:EditUserComponent},
  {"path":"medicine",component:MedicineComponent},
  {"path":"admin-register",component:AdminRegisterComponent},
  {"path":"admin-login",component:AdminLoginComponent},
  {"path":"adminlist",component:AdminlistComponent},
  {"path":"edit-admin/:id",component:EditAdminComponent},
  {"path":"admindetails/:id",component:AdmindetailsComponent},
  {"path":"addmedicine",component:AddmedicineComponent},
  {"path":"edit-medicine/:id",component:EditMedicineComponent},
  {"path":"home",component:HomeComponent},
  {"path":"aboutus",component:AboutusComponent},
  {"path":"contactus",component:ContactusComponent},
   {"path":"medicinelist",component:MedicinelistComponent},
  {"path":"medicinedetails/:id",component:MedicinedetailsComponent},
  {"path":"addcart",component:AddcartComponent},
  {"path":"ordersummary",component:OrdersummaryComponent},
  {"path":"payment",component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
