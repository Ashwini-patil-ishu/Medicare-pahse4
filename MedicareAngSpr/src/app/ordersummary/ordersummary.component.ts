import { Component,OnInit } from '@angular/core';

import { cart } from '../Module/cart';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-ordersummary',
  templateUrl: './ordersummary.component.html',
  styleUrls: ['./ordersummary.component.css']
})
export class OrdersummaryComponent implements OnInit{
  email:string=""
  bill:string=""
  items:Array<cart>=[]
  sum:number=0;

  constructor(public as:CartService){ }

  ngOnInit(): void {
    let obj = sessionStorage.getItem("userdetails");
    if(obj!=null){
      this.email=obj;
  }
  this.OrderSummary(this.email);

}

OrderSummary(email:string){
  // let cart ={email:this.user,price:this.price};
    this.as.viewmyCart(this.email).subscribe({
      next:(result:any)=>{this.items=JSON.parse(result)
        let obj1 = sessionStorage.getItem("total");

       if(obj1!=null) {
        this.bill=obj1;
        
      }},
      error:(error:any )=>console.log(error),
      complete:()=>console.log("completed")
      

    })
  }
}
