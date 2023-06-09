import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicineClass } from '../Module/medicine-class';

@Injectable({
  providedIn: 'root'
})
export class MedicareService {
  url:string="http://localhost:8082/api/medicine/";
  constructor(private http:HttpClient) { }
    //get all medicines
  getAllMedicine():Observable<MedicineClass[]>{
    return this.http.get<MedicineClass[]>(this.url);
  
  }
  //create record
 create(data:any ):Observable<any>{
  return this.http.post(this.url,data).pipe();
}
getMedicineById(id:number):Observable<MedicineClass>{
  return this.http.get<MedicineClass>(this.url+id);
}

getMedicineByName(name:string):Observable<MedicineClass>{
  return this.http.get<MedicineClass>(this.url+name);
}
getMedicineList():Observable<MedicineClass[]>{
  return this.http.get<MedicineClass[]>(`${this.url}/cust`);
}
//deleteById
deleteById(id:number){
  let myid=id;
  this.http.delete(this.url+myid).subscribe(data=>{
    return this.getAllMedicine();
  });
}

//update medicine
updateMedicine(cust:MedicineClass,id:number){
  return this.http.put(this.url+id,cust);
}
}
