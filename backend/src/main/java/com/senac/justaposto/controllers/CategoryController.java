package com.senac.justaposto.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.senac.justaposto.entities.Category;

@RestController
@RequestMapping(value = "/categories")
public class CategoryController {

	@GetMapping
	public ResponseEntity<List<Category>> findAll() {
		List<Category> list = new ArrayList<>();
		list.add(new Category(1L, "Reparação e manutenção"));
		list.add(new Category(2L, "Higiene e estética"));
		
		return ResponseEntity.ok().body(list);
	}
}
