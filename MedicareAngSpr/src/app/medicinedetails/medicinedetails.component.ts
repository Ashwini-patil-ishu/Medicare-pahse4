import { Component, OnInit } from '@angular/core';
import { MedicareService } from '../Service/medicare.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicineClass } from '../Module/medicine-class';
@Component({
  selector: 'app-medicinedetails',
  templateUrl: './medicinedetails.component.html',
  styleUrls: ['./medicinedetails.component.css']
})
export class MedicinedetailsComponent implements OnInit{

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private service:MedicareService){ }

  medicine:MedicineClass
  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.paramMap.get('id');
    console.log("id:",id);
    this.service.getMedicineById(Number(id)).subscribe(data=>this.medicine=data)
  }

}
