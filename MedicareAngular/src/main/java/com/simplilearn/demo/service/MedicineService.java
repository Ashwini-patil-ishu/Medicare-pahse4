package com.simplilearn.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.demo.entity.Medicine;
import com.simplilearn.demo.repo.MedicineRepo;

@Service
public class MedicineService {
	
	@Autowired
	private MedicineRepo repo;
	
	public Medicine addMed(Medicine m) {
		return repo.save(m);
	}
	
	public List<Medicine> getAllMedicine(){
		return repo.findAll();
	}
	
	public Medicine getMedicineById(int id) {
		if(repo.findById(id).isPresent()){
		return repo.findById(id).get();
	}
	else {
		return null;
	}
}
	
	public Medicine getMedicineByName(String name) {
		if(repo.findByName(name).isPresent()) {
			return repo.findByName(name).get();
		}
		else {
			return null;
		}
	}
	public Medicine updateMedicine(int id, Medicine newMedicine) {
		if(repo.findById(id).isPresent()) {
			Medicine medicine = repo.findById(id).get();
			medicine.setName(newMedicine.getName());
			medicine.setCategory(newMedicine.getCategory());
			medicine.setDescription(newMedicine.getDescription());
//			medicine.setAvailable(newMedicine.getAvailable());
			medicine.setPrice(newMedicine.getPrice());
			
			return repo.save(medicine);
		}
		else {
			return null;
		}
	}
	
	public boolean deleteMedicine(int id) {
		if (repo.findById(id).isPresent()) {
			repo.deleteById(id);
			return true;
		}
		else {
			return false;
		}
	}

}
