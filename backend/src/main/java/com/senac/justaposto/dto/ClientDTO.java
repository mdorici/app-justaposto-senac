package com.senac.justaposto.dto;

import com.senac.justaposto.entities.User;

public class ClientDTO {
	
	private Long id;
	private String username;
	
	public ClientDTO(Long id, String name) {
		this.id = id;
		this.username = name;
	}

	public ClientDTO(User entity) {
		id = entity.getId();
		username = entity.getUsername();
	}

	public Long getId() {
		return id;
	}

	public String getUsername() {
		return username;
	}
	
}