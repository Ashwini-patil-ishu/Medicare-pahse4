package com.simplilearn.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.simplilearn.demo.entity.User;

@Repository
public interface UserRepo extends JpaRepository<User,Integer>{

	User findByEmail(String cust_email);

//	@Query("select u.Username from User u where u.userid=:userid")
//	public String getById(int userid);
}
