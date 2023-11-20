package com.senac.justaposto.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.senac.justaposto.dto.RoleDTO;
import com.senac.justaposto.dto.UserDTO;
import com.senac.justaposto.dto.UserInsertDTO;
import com.senac.justaposto.dto.UserUpdateDTO;
import com.senac.justaposto.entities.Role;
import com.senac.justaposto.entities.User;
import com.senac.justaposto.repositories.RoleRepository;
import com.senac.justaposto.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	@Autowired
	private UserRepository repository;
	
	@Autowired
	private RoleRepository roleRepository;

	@Transactional(readOnly = true)
	public Page<UserDTO> findAllPaged(Pageable pageable) {
		Page<User> list = repository.findAll(pageable);	
		
		return list.map(x -> new UserDTO(x));
	}

	@Transactional(readOnly = true)
	public UserDTO findById(Long id) {
		Optional<User> obj = repository.findById(id);
		User entity = obj.get();
		
		return new UserDTO(entity);	
	}

	@Transactional
	public UserDTO insert(UserInsertDTO dto) {
		User entity = new User();
		copyDtoToEntity(dto, entity);
		entity.setPassword(passwordEncoder.encode(dto.getPassword()));
		entity = repository.save(entity);
		
		return new UserDTO(entity);
	}

	@Transactional
	public UserDTO update(Long id, UserUpdateDTO dto) {
		//try {
			User entity = repository.getReferenceById(id);
			copyDtoToEntity(dto, entity);
			
			entity = repository.save(entity);
			return new UserDTO(entity);
		//}
//		catch(EntityNotFoundException e) {
//			throw new ResourceNotFoundException("Id not found " + id);
//		}
			
	}

	public void delete(Long id) {
//		try {
			repository.deleteById(id);
//		}
//		catch (EmptyResultDataAccessException e) {
//			throw new ResourceNotFoundException("Id not found " + id);
//		}
//		catch (DataIntegrityViolationException) {
//			throw new DatabaseException("Integrity violation");
//		}
	}
	
	private void copyDtoToEntity(UserDTO dto, User entity) {
		entity.setFirstName(dto.getFirstName());
		entity.setLastName(dto.getLastName());
		entity.setEmail(dto.getEmail());
		
		entity.getRoles().clear();
		for(RoleDTO roleDto : dto.getRoles()) {
			Role role = roleRepository.getReferenceById(roleDto.getId());
			entity.getRoles().add(role);
		}
		
	}
		
}
