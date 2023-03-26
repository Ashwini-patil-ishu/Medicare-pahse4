import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{

  constructor(public as:CartService, public router:Router){}
  email:string=""
  msg:string=""
  ngOnInit(): void{
    let obj = sessionStorage.getItem("userdetails");
    if(obj!=null){
      this.email=obj;
  }

}
deletecart(email:string){
  this.as.delcart(email).subscribe({
    next:(result:any)=>this.msg=result,
    error:(error:any)=>console.log(error),
    complete:()=>{
      this.router.navigate(["/medicinelist"]);
      alert("Your order Placed Successfully, you will receive you order in 2 to 3 working days, happy shopping");
    }
    
  })
}

}
