package com.hcl.shopforhome.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hcl.shopforhome.model.Cart;



public interface CartRepository {

	public interface AdminDao extends JpaRepository<Cart, String> {
}
}