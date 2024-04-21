package com.senac.justaposto.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.senac.justaposto.entities.Order;

public interface OrderRepository extends JpaRepository <Order, Long> {

}