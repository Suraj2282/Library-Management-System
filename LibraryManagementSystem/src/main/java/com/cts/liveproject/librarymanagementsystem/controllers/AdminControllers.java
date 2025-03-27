package com.cts.liveproject.librarymanagementsystem.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.liveproject.librarymanagementsystem.services.admin.AdminService;

@RestController
@RequestMapping("/admin")
public class AdminControllers {
	
	@Autowired
	private AdminService adminService;
	
	@PostMapping("/user/{id}")
	public ResponseEntity<String> findNameById(@PathVariable Long id)
	{
		return new ResponseEntity<String>(adminService.getAdminName(id).getUserName(), HttpStatus.OK);
	}

}
