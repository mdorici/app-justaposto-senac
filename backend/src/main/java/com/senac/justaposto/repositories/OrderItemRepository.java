package com.senac.justaposto.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.senac.justaposto.entities.OrderItem;
import com.senac.justaposto.entities.OrderItemPK;

public interface OrderItemRepository extends JpaRepository <OrderItem, OrderItemPK> {

}