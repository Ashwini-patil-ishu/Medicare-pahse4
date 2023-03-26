import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClient ,HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddmedicineComponent } from './addmedicine/addmedicine.component';
import { AdmindetailsComponent } from './admindetails/admindetails.component';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { EditMedicineComponent } from './edit-medicine/edit-medicine.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MedicineComponent } from './medicine/medicine.component';
import { MedicinedetailsComponent } from './medicinedetails/medicinedetails.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserlistComponent } from './userlist/userlist.component';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';
import { AddcartComponent } from './addcart/addcart.component';
import { OrdersummaryComponent } from './ordersummary/ordersummary.component';

import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    AddmedicineComponent,
    AdmindetailsComponent,
    AdminlistComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    ContactusComponent,
    EditAdminComponent,
    EditMedicineComponent,
    EditUserComponent,
    HomeComponent,
    LoginComponent,
    MedicineComponent,
    MedicinedetailsComponent,
    RegistrationComponent,
    UserdetailsComponent,
    UserlistComponent,
    MedicinelistComponent,
    AddcartComponent,
    OrdersummaryComponent,
 
    PaymentComponent
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
export class AppModule { }
