import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  url:string="http://localhost:8082/api/cart/";
  constructor(private http:HttpClient) { }

  addcart(addcart:any):Observable<any>{
    return this.http.post(this.url,addcart).pipe();
  }

  viewmyCart(email:string):Observable<string> {
    return this.http.get(this.url+"/orderSummary/"+email,{responseType:"text"});
  }
  delcart(email:string):Observable<string>{
    return this.http.delete(this.url+"/deleteCart/"+email,{responseType:"text"});
  }

  delRequest(email:string):Observable<string>{
    return this.http.delete(this.url+"/deleteItem/"+email,{responseType:"text"});
  }

  totalbill(email:string):Observable<string>{
    return this.http.delete(this.url+"/deleteItem/"+email,{responseType:"text"});
  }

 
}
