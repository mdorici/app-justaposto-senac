package com.senac.justaposto.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.senac.justaposto.entities.Category;

@Repository
public interface CategoryRepository extends JpaRepository <Category, Long> {
	
}