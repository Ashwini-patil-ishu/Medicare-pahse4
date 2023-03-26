package com.simplilearn.demo;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.demo.entity.Medicine;
import com.simplilearn.demo.entity.User;
import com.simplilearn.demo.service.MedicineService;

@CrossOrigin("http://localhost:4200/")
@RestController
@RequestMapping("/api/medicine")
public class MedicineController {
	
	@Autowired
	private MedicineService service;
	
	@PostMapping("/")
	public ResponseEntity<Medicine> addMed(@RequestBody Medicine m){
		
		Medicine medicine = service.addMed(m);
		
		if(medicine!=null)
			return new ResponseEntity<Medicine>(medicine,HttpStatus.CREATED);
		else
			return new ResponseEntity<Medicine>(medicine,HttpStatus.INTERNAL_SERVER_ERROR);
		
	}
	
	@GetMapping("/")
	public List<Medicine> getAllMedicine(){
		return service.getAllMedicine();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Medicine> getMedicineById(@PathVariable int id){
		Medicine medicine = service.getMedicineById(id);
		
		if(medicine!=null)
			return new ResponseEntity<Medicine>(medicine,HttpStatus.OK);
		else
			return new ResponseEntity<Medicine>(medicine,HttpStatus.NOT_EXTENDED);
		
	}
	
	@GetMapping("/{name}")
	public ResponseEntity<Medicine> getMedicineByName(@PathVariable String name){
		Medicine medicine = service.getMedicineByName(name);
		
		if(medicine!=null)
			return new ResponseEntity<Medicine>(medicine,HttpStatus.OK);
		else
			return new ResponseEntity<Medicine>(medicine,HttpStatus.NOT_EXTENDED);
		
	}
	
//	@GetMapping("/{id}")
//	public ResponseEntity<Medicine> getMedicineById1(@PathVariable int id){
//		Medicine medicine = service.getMedicineById(id);
//		
//		if(medicine!=null)
//			return new ResponseEntity<Medicine>(medicine,HttpStatus.OK);
//		else
//			return new ResponseEntity<Medicine>(medicine,HttpStatus.NOT_EXTENDED);
//		
//	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Object> updateMedicine(@PathVariable int id,@RequestBody Medicine newMedicine){
		Medicine medicine= service.updateMedicine(id, newMedicine);
		
		if (medicine!=null)
			return new ResponseEntity<Object>(medicine,HttpStatus.OK);
		else
			return new ResponseEntity<Object>("No Medicine Available to Update",HttpStatus.NOT_FOUND);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteMedicine(@PathVariable int id){
		boolean result = service.deleteMedicine(id);
		if(result) 
			return new ResponseEntity<String>("Object Deleted",HttpStatus.OK);
		else
			return new ResponseEntity<String>("NO Medicine Found", HttpStatus.NOT_FOUND);
		
	}
 
}


