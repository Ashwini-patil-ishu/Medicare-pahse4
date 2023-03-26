import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BankService {
  url:string="http://localhost:8082/api/bank/";
  constructor(private http:HttpClient) { }

  addcart(addbank:any):Observable<any>{
    return this.http.post(this.url,addbank).pipe();
  }
}
