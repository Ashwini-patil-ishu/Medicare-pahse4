package com.simplilearn.demo.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.simplilearn.demo.entity.Medicine;


public interface MedicineRepo extends JpaRepository<Medicine,Integer>{

	Optional<Medicine> findByName(String name);

}
