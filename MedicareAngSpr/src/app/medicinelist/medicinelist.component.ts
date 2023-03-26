import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { MedicareService } from '../Service/medicare.service';
import { MedicineClass } from '../Module/medicine-class';
import { CartService } from '../cart.service';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { cart } from '../Module/cart';


@Component({
  selector: 'app-medicinelist',
  templateUrl: './medicinelist.component.html',
  styleUrls: ['./medicinelist.component.css']
})
export class MedicinelistComponent implements OnInit{
  cart:Array<cart>=[]
  email:string=""
  msg:string=""
  items:Array<cart>=[]
  price:number=0
  user:string=""
  medicine:MedicineClass[]
  medicines:any

  constructor(private router:Router, private service:MedicareService, public cartservice:CartService, private http:HttpClient) { }
 
  ngOnInit(): void {
    this.service.getAllMedicine().subscribe(result=>this.medicine=result);
    let obj = sessionStorage.getItem("userdetails");
    if(obj!=null){
      this.user=obj;
      this.email=obj;
    }
    this.viewcart(this.email);
  

    let response = this.http.get("http://localhost:8082/api/medicine/getAllMedicine");
    response.subscribe((data)=>{
      this.medicines =data;
      console.log(this.medicine);
    });
  }

  addcart(acart:any){
    let cart ={email:this.user,price:this.price};
    this.cartservice.addcart(cart).subscribe({
      next:(result:any)=>{if(result=="Added to cart"){
        alert ("added to cart")
      }},
      error:(error:any )=>console.log(error),
      complete:()=>{"completed"}
      

    })
  }

  viewcart(email:string){
    this.cartservice.viewmyCart(this.email).subscribe({
     next:(result:any)=>this.msg=result,
     error:(error:any)=>console.log(error),
     complete:()=>console.log("completed")
   
    })
   }
   bill(email:string){
     this.cartservice.delRequest(email).subscribe({
       next:(result:any)=>this.msg=result,
       error:(error:any)=>console.log(error),
       complete:()=>console.log("completed")
     })
   }
   
   deleteItem(email:string){
     this.cartservice.delRequest(email).subscribe({
       next:(result:any)=>this.msg=result,
       error:(error:any)=>console.log(error),
       complete:()=>this.viewcart(email)
     })
   
   }
  // buy(medicines:any){
  //   let medicine={id:this.medicines,PaymentRequest:this.price};
  //   this.cartservice.buymedicine(medicine).subscribe({
  //     next:(result:any)
  //   })
  // }

}
