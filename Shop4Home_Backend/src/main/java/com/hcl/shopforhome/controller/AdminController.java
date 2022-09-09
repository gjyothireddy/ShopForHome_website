package com.hcl.shopforhome.controller;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.shopforhome.model.Admin;
import com.hcl.shopforhome.service.AdminService;



@RestController
@RequestMapping(value="Admin")
@CrossOrigin

 public class AdminController {
	@Autowired
	AdminService adminService;
	
	@PostMapping(value="register",consumes=MediaType.APPLICATION_JSON_VALUE)
	public String adminRegister(@RequestBody Admin adm) {
	return adminService.adminRegistration(adm);
	}
	
	@PostMapping(value="login")
	public String checkAdminInfo(@RequestBody Admin adm) {
		return adminService.checkAdminDetails(adm);	
	}
	
	@GetMapping(value="displayAdmin")
	public List<Admin> getAllAdminAvaliable() {
		return adminService.getAllAdminAvaliable();
	}
	
	
	 @GetMapping(value = "logout/{email}")
	 public String adminLogoutInfo(@PathVariable("email") String email) {
	 return adminService.adminLogout(email);
        }
	 
}
