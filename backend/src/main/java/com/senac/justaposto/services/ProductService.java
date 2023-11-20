package com.senac.justaposto.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.senac.justaposto.dto.ProductDTO;
import com.senac.justaposto.entities.Product;
import com.senac.justaposto.repositories.ProductRepository;

@Service
public class ProductService {

	@Autowired
	private ProductRepository repository;

	@Transactional(readOnly = true)
	public Page<ProductDTO> findAllPaged(PageRequest pageRequest) {
		Page<Product> list = repository.findAll(pageRequest);	
		
		return list.map(x -> new ProductDTO(x));
	}

	@Transactional(readOnly = true)
	public ProductDTO findById(Long id) {
		Optional<Product> obj = repository.findById(id);
		Product entity = obj.get();
		
		return new ProductDTO(entity, entity.getCategories());	
	}

	@Transactional
	public ProductDTO insert(ProductDTO dto) {
		Product entity = new Product();
//		entity.setName(dto.getName());
		entity = repository.save(entity);
		
		return new ProductDTO(entity);
	}

	@Transactional
	public ProductDTO update(Long id, ProductDTO dto) {
		//try {
			Product entity = repository.getReferenceById(id);
//			entity.setName(dto.getName());
			
			
			entity = repository.save(entity);
			return new ProductDTO(entity);
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
		
}
