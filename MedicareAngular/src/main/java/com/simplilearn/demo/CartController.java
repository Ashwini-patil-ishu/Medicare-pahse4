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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.demo.entity.Admin;
import com.simplilearn.demo.entity.Cart;
import com.simplilearn.demo.service.CartService;

@CrossOrigin("http://localhost:4200/")
@RestController
@RequestMapping("/api/cart")
public class CartController {
	
	@Autowired
	private CartService service;
	
	@PostMapping("/")
public ResponseEntity<Cart> addCart(@RequestBody Cart c){
		
	Cart cart= service.addCart(c);
		
		if(cart!=null)
			return new ResponseEntity<Cart>(cart,HttpStatus.CREATED);
		else
			return new ResponseEntity<Cart>(cart,HttpStatus.INTERNAL_SERVER_ERROR);
		
	}
	
	@DeleteMapping("/{email}")
	public ResponseEntity<String>deleteItem(@PathVariable String email){
		String result = service.deleteItem(email);
		if(result != null) 
			return new ResponseEntity<String>("Object Deleted",HttpStatus.OK);
		else
			return new ResponseEntity<String>("NO  Found", HttpStatus.NOT_FOUND);
		
	}
	@DeleteMapping("/deleteCart/{email}")
	public ResponseEntity<String>deleteCartAfterPayment(@PathVariable String email){
		String cart = service.deleteCartAfterPayment(email);
		if(cart != null) 
			return new ResponseEntity<String>("cart Deleted",HttpStatus.OK);
		else
			return new ResponseEntity<String>("NO cart Found", HttpStatus.NOT_FOUND);
		
	}
	
	@GetMapping("/bill/{email}")
	public ResponseEntity<Cart> bill(@PathVariable String email){
		Cart cart = service.totalBill(email);
		
		if(cart!=null)
	     return new ResponseEntity<Cart>(cart,HttpStatus.OK);
		else
			return new ResponseEntity<Cart>(cart,HttpStatus.NOT_FOUND);
	
	}
	@GetMapping("/orderSummary/{email}")
	public List<Cart> orderSummaryByEmail(String email){
		return service.orderSummaryByEmail(email);
	}
}
