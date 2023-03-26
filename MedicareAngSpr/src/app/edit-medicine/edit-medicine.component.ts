import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { MedicineClass } from '../Module/medicine-class';
import { MedicareService } from '../Service/medicare.service';
@Component({
  selector: 'app-edit-medicine',
  templateUrl: './edit-medicine.component.html',
  styleUrls: ['./edit-medicine.component.css']
})
export class EditMedicineComponent implements OnInit{

  medicine: MedicineClass;
  id: string | null;
  registerForm!: FormGroup;
  submitted:boolean=false;
  constructor(private service:MedicareService,private activatedroute:ActivatedRoute, private builder:FormBuilder,private router:Router) { }


  ngOnInit(): void {

    this.id=this.activatedroute.snapshot.paramMap.get('id');
    this.service.getMedicineById(Number(this.id)).subscribe(x=>this.medicine=x);

    this.registerForm=this.builder.group({
      name:['',Validators.required],
      description:['',Validators.required],
      category:['',Validators.required],
      price:['',Validators.required],
      

    });
  }

  get form(){
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted=true;
    if(this.registerForm.invalid)
      return;
    else
      {
        this.service.updateMedicine(this.medicine,Number(this.id)).subscribe(x=>console.log(x));
        alert("Data Updated Successfully");
        this.router.navigate(['list'])
      }
  }
}
