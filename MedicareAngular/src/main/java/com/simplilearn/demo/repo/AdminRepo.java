package com.simplilearn.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.simplilearn.demo.entity.Admin;



public interface AdminRepo  extends JpaRepository<Admin,Integer>{

}
