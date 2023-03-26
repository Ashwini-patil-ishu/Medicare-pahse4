package com.simplilearn.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.demo.entity.Bank;
import com.simplilearn.demo.repo.BankRepo;

@Service
public class BankService {
	
	@Autowired
	BankRepo repo;
	
	
	public Bank addBank(Bank b)
	{
		return repo.save(b);
	}


}
