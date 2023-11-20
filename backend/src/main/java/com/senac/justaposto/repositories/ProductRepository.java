package com.senac.justaposto.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.senac.justaposto.entities.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
	

}
