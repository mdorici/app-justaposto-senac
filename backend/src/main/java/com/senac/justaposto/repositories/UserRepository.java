package com.senac.justaposto.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.senac.justaposto.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
