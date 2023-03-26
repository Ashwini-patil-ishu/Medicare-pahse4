package com.simplilearn.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.simplilearn.demo.entity.Bank;

public interface BankRepo extends JpaRepository<Bank, Integer>{

}
