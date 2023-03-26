import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicareService } from '../Service/medicare.service';
import { MedicineClass } from '../Module/medicine-class';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {
  constructor(private router:Router, private service:MedicareService) { }
  medicine:MedicineClass[];
  ngOnInit(): void {
    this.service.getAllMedicine().subscribe(result=>this.medicine=result);
  }
  DeleteMedicineById(id:number){
    //refresh the list once user is deleted
    this.medicine=this.medicine.filter(c=>c.id!=id);
    //delete user
    this.service.deleteById(id);
    console.log("medicine Deleted");

}
}
