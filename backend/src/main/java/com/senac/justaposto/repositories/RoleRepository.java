package com.senac.justaposto.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.senac.justaposto.entities.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

}
