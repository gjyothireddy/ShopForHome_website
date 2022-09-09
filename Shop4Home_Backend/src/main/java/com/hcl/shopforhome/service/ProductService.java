package com.hcl.shopforhome.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.hcl.shopforhome.model.Product;
import com.hcl.shopforhome.repository.ProductRepository;

@Service
public class ProductService {

	@Autowired
	ProductRepository productRepository;
	
	//get allproducts
	public List<Product> getAllProducts() {
		return productRepository.findAll();
	}
	
//store
	public String storeProduct(Product product) {
		if (productRepository.existsById(product.getPid())) {
			return "Product Id Should Be Unique";
		} else {
			productRepository.save(product);
			return "Product Stored Successfully";
		}
	}
	
	//update
	public String updateProductPrice(Product product) {
		if (productRepository.existsById(product.getPid())) {
			Product pp = productRepository.getById(product.getPid());
			pp.setPrice(product.getPrice());
			productRepository.saveAndFlush(pp);
			return "Product Price Updated Successfully";
			
		} else {
			return "No product Found";
		}
	}
	
	//delete
	public String deleteProduct(int pid) {
		if (!productRepository.existsById(pid)) {
			return "Product  Details Not Present";
		} else {
			productRepository.deleteById(pid);
			return "Product Deleted Successfully";
		}
	}
	public List<Product> findProductUsingPrice(float price) {
		return productRepository.getProductByPrice(price);
	}
}
