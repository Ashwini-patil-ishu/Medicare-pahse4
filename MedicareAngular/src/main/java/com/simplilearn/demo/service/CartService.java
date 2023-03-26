package com.simplilearn.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.demo.entity.Cart;
import com.simplilearn.demo.repo.CartRepo;

@Service
public class CartService {
	
	@Autowired
	private CartRepo repo;
	
	public Cart addCart (Cart c) {
		return repo.save(c);
	}
	
	public String deleteItem(String email) {
		Optional<Cart> result = repo.deleteItem(email );
		if(result.isPresent()) {
			Cart c = result.get();
			repo.delete(c);
			return "Item deleted Successfully";
		}
		else {
			return"Item not present";
		}
	}
	
	public String deleteCartAfterPayment(String email) {
		List<Cart> result = repo.deleteCartAfterPayment(email);
		repo.deleteAll(result);
		return "cart deleted";
	}
	public List<Cart> orderSummaryByEmail(String email){
		return repo.orderSummary(email);
	}

	public Cart totalBill(String email) {
		return repo.bill(email);
	}
}
