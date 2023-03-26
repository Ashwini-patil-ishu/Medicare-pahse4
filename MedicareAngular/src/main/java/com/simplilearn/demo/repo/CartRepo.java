package com.simplilearn.demo.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.simplilearn.demo.entity.Cart;


public interface CartRepo extends JpaRepository<Cart,Integer>{
@Query("select q from Cart q where q.email= :email")
	public Optional<Cart> deleteItem(String email);
@Query("select q from Cart q where q.email= :email")
	public List<Cart> deleteCartAfterPayment(String email);

@Query("select q from Cart q where q.email= :email")
public List<Cart> orderSummary(String email);
@Query("select Sum(q.price) from Cart q where q.email= :email")
public Cart bill(String email);

}
