package com.cts.liveproject.librarymanagementsystem.services.admin;

import com.cts.liveproject.librarymanagementsystem.entities.User;

public interface AdminService {
	
	public void createAdminAccount();
	
	public User getAdminName(Long id);

}
