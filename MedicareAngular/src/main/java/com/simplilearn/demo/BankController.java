package com.simplilearn.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.demo.entity.Bank;
import com.simplilearn.demo.repo.BankRepo;
import com.simplilearn.demo.service.BankService;

@CrossOrigin("http://localhost:4200/")
@RestController
@RequestMapping("/api/bank")
public class BankController {
	
	@Autowired
	BankService service;
	
	
	@Autowired
	BankRepo repo;
	
	@PostMapping("/addbank")
	public String addBank(@RequestBody  Bank acc) {
		
		 service.addBank(acc);
		 
		 return "bank added";
	}
	
	@GetMapping("/getallbank")
	public List<Bank> getBanks(){
		
		return repo.findAll();
	}

}
